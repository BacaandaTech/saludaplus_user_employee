import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredentials } from 'src/app/shared/interfaces/auth.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { setUser } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('modalLogin') modal_login: any;
  setUser = setUser
  bsModalRef?: BsModalRef;
  email: string;
  password: string;

  constructor(private auth_service: AuthService, private router: Router, private modalService: BsModalService) {
    this.email = "chinorubikguitar@yopmail.com"
    this.password = "eoqczq";
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
        this.setUser(response.user)
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
