import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredentials } from 'src/app/shared/interfaces/auth.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('modalLogin') modal_login: any;

  bsModalRef?: BsModalRef;
  email: string;
  password: string;

  constructor(private auth_service: AuthService, private router: Router, private modalService: BsModalService) {
    this.email = "chinorubikguitar@hotmail.com"
    this.password = "chino";
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.openModal(this.modal_login);
    }, 100)
  }
  loginAction(): any {
    const credentials: AuthCredentials = {
      email: this.email,
      password: this.password
    }
    this.auth_service.login(credentials).subscribe((response) => {
      if (response && response.access_token) {
        localStorage.setItem('token', response.access_token);        
        this.auth_service.setCurrentUser(response.user);
        this.router.navigateByUrl('/home');
        this.bsModalRef?.hide()
      } else {
        console.error('No se pudo obtener el token de acceso.');
      }
    })
  }
  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }
}
