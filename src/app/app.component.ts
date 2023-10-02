import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'BacandaApp';
  has_session: boolean;
  private authSubscription: Subscription | undefined;
  constructor(
    private authService: AuthService,
  ){
    this.has_session = this.authService.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.currentAuth.subscribe(
      status => {
        this.has_session = status;
      }
    );
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
}
