import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  styleUrls: ['./breadcrumb.component.scss'],
  template: `
  <nav class="navbar-bradcrumb px-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" [routerLink]='["/home"]'>Home</li>
        <li class="breadcrumb-item" *ngIf="route_url.includes('/cursos')" [routerLink]='["/cursos"]'>Cursos</li>
        <li class="breadcrumb-item" *ngIf="route_url.includes('/configuracion')" [routerLink]='["/configuracion"]'>Configuración</li>
        <li class="breadcrumb-item" *ngIf="route_url === '/mi-poliza'" [routerLink]='["/mi-poliza"]' >Mi póliza</li>
        <li class="breadcrumb-item" *ngIf="route_url === '/beneficios'" [routerLink]='["/beneficios"]' >Beneficios</li>
      </ol>
    </nav>
    <div>
      <div class="cursor-pointer d-none d-sm-block">
        <img src="/assets/img/icons/phone-call.svg" class="icon-phone">
        <span class="ms-2">(55) 2233 4455</span>
      </div>
    </div>
  </nav>`
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  private router_subscription: Subscription | undefined;
  route_url: any = '';


  constructor(private router: Router) {
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
}
