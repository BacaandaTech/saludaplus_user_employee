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
  categories: any[];

  constructor(private courses_service: CoursesService) {
    this.courses = null
    this.categories = [];
  }

  ngOnInit(): void {
    this.courses_service.courses$.subscribe((courses) => {
      this.courses = courses;
      this.categories = [];
      this.formatCourses(courses);
    })
    this.courses_service.getCourses();
  }
  formatCourses(courses: ICourse[] | null) {
    if (courses) {
      courses.forEach((i) => {
        const category_item = this.categories.find((ca) => ca.category === i.category);
        !category_item ? this.categories.push({category: i.category, courses: [i]}) : category_item.courses.push(i)
      })
    }
  };
}
