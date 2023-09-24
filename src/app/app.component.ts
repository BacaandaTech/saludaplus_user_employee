import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { hasSession } from './shared/utils/utils';
import { AuthService } from './shared/services/auth/auth.service';
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


  constructor(private router: Router, private auth_service: AuthService) {
    this.route_url = router.url;
  }

  ngOnInit(): void {
    this.router_subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.route_url = event;
      this.route_url = this.route_url.url;
    });
  }
  ngOnDestroy(): void {
    if (this.router_subscription) {
      this.router_subscription.unsubscribe();
    }
  }
  logoutAction(): void {
    this.auth_service.logout();
  }
}
