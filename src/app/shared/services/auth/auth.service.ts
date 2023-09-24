import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthCredentials } from '../../interfaces/auth.interface';
import { HttpClientService } from '../http/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentAuthStatus: BehaviorSubject<any> = new BehaviorSubject(this.isUserLoggedIn());
  public readonly currentAuth: Observable<any> = this.currentAuthStatus.asObservable();

  constructor(
    private http: HttpClientService,
    private router: Router
  ){}

  login(credentials: AuthCredentials){
    return this.http.getQuery('post','/v1/user/login',credentials).pipe(map( (resp) =>  resp as any));//TODO:pendiente interfaz de datos de usuario
  }

  isUserLoggedIn(){
    const currentUser = localStorage.getItem('token');
    if (currentUser) {
        return true;
    } return false
  }

  setCurrentUser(authStatus:any): void {
    this.currentAuthStatus.next(authStatus);
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}