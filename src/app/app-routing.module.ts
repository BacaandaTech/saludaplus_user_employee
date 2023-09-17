import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: 'policies', 
    loadChildren: () => import('./pages/policies/policies.module').then(m => m.PoliciesModule)
  },
  { 
    path: 'contacts', 
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  },
  { 
    path: '', 
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
