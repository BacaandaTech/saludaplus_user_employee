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
        <li class="breadcrumb-item"><a [routerLink]='["/home"]'>Home</a></li>
        <li class="breadcrumb-item" *ngIf="route_url.includes('/cursos')"><a [routerLink]='["/cursos"]'>Cursos</a></li>
        <li class="breadcrumb-item" *ngIf="route_url.includes('/configuracion')"><a [routerLink]='["/configuracion"]'>Configuración</a></li>
        <li class="breadcrumb-item" *ngIf="route_url === '/mi-poliza'"><a [routerLink]='["/mi-poliza"]'>Mi póliza</a></li>
      </ol>
    </nav>
    <div>
      <span *ngIf="route_url === '/'; else elseBlock" >Consola de usuario</span>
      <ng-template #elseBlock>
        <div class="close-icon-return"  [routerLink]='["/home"]'>
          x
        </div>
      </ng-template>
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
