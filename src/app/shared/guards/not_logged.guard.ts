import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NotLoggedGuard implements CanActivate {
    constructor(
        private router: Router,
        
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = localStorage.getItem('token');
        if (!currentUser) {
            // not logged in so return true
            return true;
        }

        // logged in so redirect to main page
        this.router.navigateByUrl('/');
        return false;
    }
}