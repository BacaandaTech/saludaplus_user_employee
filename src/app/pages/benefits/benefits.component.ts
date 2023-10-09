import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/shared/services/policy/policy.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-benefits',
  template: `
    <section class="main-container-benefits">
      <iframe class="col-12" *ngIf="loaded_service" [src]="url_iframe" title="benefits-collaborator"></iframe>
    </section>
  `,
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  public loaded_service: boolean = false;
  public url_iframe: any = '';

  constructor(private policy_service: PolicyService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.openBenefits();
  }

  openBenefits(): void {
    this.policy_service.openBenefits().subscribe({
      next: (response: any) => {
        if (response.status === 200) {
          this.loaded_service = true;
          this.url_iframe = this.sanitizer.bypassSecurityTrustResourceUrl(response.data.url);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error, 'No se pudo cargar')
      }
    })
  }
}