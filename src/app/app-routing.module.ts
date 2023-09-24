import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PolicieComponent } from './pages/policie/policie.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: '404', 
    component: NotFoundComponent
  },
  { 
    path: 'mi-poliza', 
    component: PolicieComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'cursos', 
    loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
