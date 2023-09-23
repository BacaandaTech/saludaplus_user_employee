import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { BusinessComponent } from './business/business.component';
import { HomeCoursesComponent } from './home-courses/home-courses.component';

const routes: Routes = [
  { path: '',
    component: CoursesComponent,
    children: [
        { path: '', component: HomeCoursesComponent },
        { path: 'negocio', component: BusinessComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
