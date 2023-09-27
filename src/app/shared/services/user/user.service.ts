import { Injectable } from '@angular/core';
import { HttpClientService } from '../http/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClientService) { }

  updateProfile(form_data: FormData) {
    return this.http.getQuery('post','/v1/profile/update', form_data);
  }
}
