import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { HomeCoursesComponent } from './home-courses/home-courses.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';

const routes: Routes = [
  { path: '',
    component: CoursesComponent,
    children: [
        { path: '', component: HomeCoursesComponent },
        { path: ':id', component: DetailCourseComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
