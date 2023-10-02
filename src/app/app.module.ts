import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/interceptors/jwt.inteceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { PolicieComponent } from './pages/policie/policie.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PolicieComponent,
    NotFoundComponent,
    LoginComponent,
    SettingsComponent,
    RecoverPasswordComponent,
    NavbarComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
