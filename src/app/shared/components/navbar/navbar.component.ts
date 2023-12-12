import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { hasSession } from '../../utils/utils';
import { AuthService } from '../../services/auth/auth.service';
import { getUserData } from '../../utils/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  has_session = hasSession()
  private authSubscription: Subscription | undefined;
  user_data: any | undefined = getUserData
  name_user: string = '';
  avatar_user: string = ''
  logo_brand: string = '';

  constructor(private auth_service: AuthService) {
    if (this.user_data()) {
      this.name_user = this.user_data().meta.name.toUpperCase();
      this.avatar_user = this.user_data().meta.avatar ? this.user_data().meta.avatar : '../assets/img/logo/avatar-default.png'
    }
  }

  ngOnInit(): void {
    this.authSubscription = this.auth_service.currentAuth.subscribe((auth_status) => {
      this.has_session = auth_status;
      if (this.user_data()) { 
        this.name_user = this.user_data().meta.name.toUpperCase();
        this.avatar_user = this.user_data().meta.avatar ? this.user_data().meta.avatar : '../assets/img/logo/avatar-default.png'
        this.logo_brand = this.user_data().brand.logo ? this.user_data().brand.logo : '../../../../assets/img/logo/saluda+.png';
        
      }
    })
  }
  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
  logoutAction(): void {
    this.auth_service.logout();
    this.auth_service.setCurrentUser(undefined);
  }
}
