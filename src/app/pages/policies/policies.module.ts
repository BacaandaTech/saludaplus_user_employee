import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies.component';
import { ListPoliciesComponent } from './list-policies/list-policies.component';
import { CreatePolicieComponent } from './create-policie/create-policie.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PoliciesComponent,
    ListPoliciesComponent,
    CreatePolicieComponent
  ],
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    ReactiveFormsModule
  ],
})
export class PoliciesModule { }
