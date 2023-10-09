import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PolicieComponent } from './pages/policie/policie.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'restablecer/password', 
    component: RecoverPasswordComponent,
  },
  { 
    path: '404', 
    component: NotFoundComponent
  },
  { 
    path: 'configuracion', 
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'mi-poliza', 
    component: PolicieComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'beneficios', 
    component: BenefitsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'cursos', 
    loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule),
    canActivate: [AuthGuard]
  },
  { 
    path: '**', 
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
