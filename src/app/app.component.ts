import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { hasSession } from './shared/utils/utils';
import { AuthService } from './shared/services/auth/auth.service';
import { getUserData } from './shared/utils/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BacandaApp';
  private router_subscription: Subscription | undefined;
  route_url: any = '';
  has_session = hasSession()
  private authSubscription: Subscription | undefined;
  user_data: any | undefined = getUserData
  name_user: string = '';


  constructor(private router: Router, private auth_service: AuthService) {
    this.route_url = router.url;
    if (this.user_data()) this.name_user = this.user_data().meta.name;
  }

  ngOnInit(): void {
    this.router_subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.route_url = event;
      this.route_url = this.route_url.url;
    });

    this.authSubscription = this.auth_service.currentAuth.subscribe((auth_status) => {
      this.has_session = auth_status;
      if (this.user_data()) this.name_user = this.user_data().meta.name;
    })
  }
  ngOnDestroy(): void {
    if (this.router_subscription) {
      this.router_subscription.unsubscribe();
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
  logoutAction(): void {
    this.auth_service.logout();
    this.auth_service.setCurrentUser(undefined);
  }
}
