import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessComponent } from './business/business.component';
import { HomeCoursesComponent } from './home-courses/home-courses.component';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent,
    BusinessComponent,
    HomeCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CoursesModule { }
