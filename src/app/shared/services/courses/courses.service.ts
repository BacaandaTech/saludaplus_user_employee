import { Injectable } from '@angular/core';
import { HttpClientService } from '../http/httpclient.service';
import { BehaviorSubject } from 'rxjs';
import { ICourse } from '../../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = new BehaviorSubject<ICourse[] | null>(null);
  courses$ = this.courses.asObservable();

  constructor(private http: HttpClientService) { }

  getCourses(){
    return this.http.getQuery('get','/v1/collaborator/courses', {}).subscribe((response: any) => {
      this.courses.next(response.data.courses)
    });
  }
}
