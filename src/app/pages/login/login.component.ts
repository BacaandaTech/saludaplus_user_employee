import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCredentials } from 'src/app/shared/interfaces/auth.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Subject, takeUntil } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('modalLogin') modal_login: any;
  bsModalRef?: BsModalRef;
  forgot_password_view: boolean = false;
  private unsuscribe$: Subject<void> = new Subject();
  password_recover_view: boolean = false;

  form_login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private auth_service: AuthService, 
    private router: Router, 
    private modalService: BsModalService,
    private user_service: UserService
  ) {
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

    this.auth_service.login(credentials).pipe(takeUntil(this.unsuscribe$)).subscribe({
      next: (response: any) => {
        if (response && response.access_token && response.user.roles[0].name === 'collaborator') {
          this.handleSuccesLogin(response)
          this.auth_service.setCurrentUser(response.user);
          this.router.navigateByUrl('/home');
          this.bsModalRef?.hide()
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }
  openModal(template: TemplateRef<any>): void {
    this.bsModalRef = this.modalService.show(template);
  }

  forgotPasswordAction(): void {
    const form_data: FormData = new FormData()
    form_data.append('email', this.form_login.value.email ?? '')

    this.user_service.sendRecoverPassword(form_data).subscribe({
      next: (response: any) => {
        this.password_recover_view = true;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.error.message)
      }
    })
  }

  handleSuccesLogin(response:any) {
    localStorage.clear();
    localStorage.setItem("token", response.access_token);
    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("permissions", JSON.stringify(response.user.permissions));
    localStorage.setItem("expires_in", JSON.stringify(Date.now() + response.expires_in ));
  }

}
