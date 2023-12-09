import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses/courses.service';
import { ICourse } from 'src/app/shared/interfaces/course.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  course: ICourse | null | undefined;


  constructor(private courses_service: CoursesService, private active_route: ActivatedRoute) {
    this.course = null;
  }

  ngOnInit(): void {
    this.courses_service.courses$.subscribe((courses) => {
      this.course = courses?.find((i) => i.id === parseInt(this.active_route.snapshot.params['id']))
    })
    this.courses_service.getCourses();
  }
  openLesson(url: string): void {
    window.open(url, '_blank');
  }
}
