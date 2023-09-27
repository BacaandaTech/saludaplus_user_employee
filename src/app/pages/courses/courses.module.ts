import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeCoursesComponent } from './home-courses/home-courses.component';
import { CoursesComponent } from './courses.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';

@NgModule({
  declarations: [
    CoursesComponent,
    HomeCoursesComponent,
    DetailCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class CoursesModule { }
