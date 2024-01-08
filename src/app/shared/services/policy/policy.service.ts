import { Injectable } from '@angular/core';
import { HttpClientService } from '../http/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClientService) { }

  getPolicy(){
    return this.http.getQuery('get','/v1/profile/my-policy', {});
  }

  openBenefits() {
    return this.http.getQuery('get','/v1/collaborator/benefits', {});
  }
}
