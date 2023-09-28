import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredentials } from 'src/app/shared/interfaces/auth.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { setUser } from 'src/app/shared/utils/utils';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('modalLogin') modal_login: any;
  setUser = setUser
  bsModalRef?: BsModalRef;

  form_login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth_service: AuthService, private router: Router, private modalService: BsModalService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.openModal(this.modal_login);
    }, 100)
  }
  
  loginAction(): any {
    const credentials: AuthCredentials = {
      email: this.form_login.value.email ?? '',
      password: this.form_login.value.password ?? ''
    }

    this.auth_service.login(credentials).subscribe((response) => {
      if (response && response.access_token && response.user.roles[0].name === 'collaborator') {
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
