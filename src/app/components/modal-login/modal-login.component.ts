import { Component, ViewChild, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { AuthCredentials } from 'src/app/shared/interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
  providers: [AuthService]
})
export class ModalLoginComponent {
  @ViewChild('modalTemplate') modalTemplate?: TemplateRef<any>;

  email: string;
  password: string;

  constructor(private auth_service: AuthService, private router: Router) {
    this.email = "chinorubikguitar@hotmail.com"
    this.password = "chino";
  }


  loginAction(): any {
    console.log('hello world')
    const credentials: AuthCredentials = {
      email: this.email,
      password: this.password
    }
    this.auth_service.login(credentials).subscribe((response) => {
      if (response && response.access_token) {
        localStorage.setItem('token', response.access_token);        
        this.auth_service.setCurrentUser(response.user);
        // this.router.navigateByUrl('/cursos');
      } else {
        console.error('No se pudo obtener el token de acceso.');
      }
    })
  }
}
