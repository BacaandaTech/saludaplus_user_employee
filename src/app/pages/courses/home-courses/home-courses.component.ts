import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses/courses.service';
import { ICourse } from 'src/app/shared/interfaces/course.interface';
@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrls: ['./home-courses.component.scss']
})
export class HomeCoursesComponent implements OnInit {
  courses: ICourse[] | null;
  constructor(private courses_service: CoursesService) {
    this.courses = null
  }

  ngOnInit(): void {
    this.courses_service.courses$.subscribe((courses) => {
      this.courses = courses;
    })
    this.courses_service.getCourses();    
  }
}
