import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PolicieComponent } from './pages/policie/policie.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'mi-poliza', 
    component: PolicieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
