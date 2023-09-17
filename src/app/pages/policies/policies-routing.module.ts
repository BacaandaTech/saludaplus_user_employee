import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliciesComponent } from './policies.component';
import { ListPoliciesComponent } from './list-policies/list-policies.component';
import { CreatePolicieComponent } from './create-policie/create-policie.component';
import { DetailPolicieComponent } from './detail-policie/detail-policie.component';

const routes: Routes = [
  { path: '',
    component: PoliciesComponent, 
    children: [
      { 
        path: 'list', 
        component: ListPoliciesComponent,
      },
      { 
        path: 'create', 
        component: CreatePolicieComponent,
      },
      { 
        path: 'detail/:uuid', 
        component: DetailPolicieComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
