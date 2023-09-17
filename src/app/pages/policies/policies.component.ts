import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit, OnDestroy {
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
