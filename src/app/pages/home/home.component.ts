import { Component } from '@angular/core';
import { IHomeRoutes } from 'src/app/shared/interfaces/home.routes.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public main_routes: IHomeRoutes[] = [
    {
      name: 'Mi póliza',
      route: '/mi-poliza',
      icon: 'check.png'
    },
    {
      name: 'Cursos',
      route: '/cursos',
      icon: ''
    },
    {
      name: 'Beneficios',
      route: '/beneficios',
      icon: '',
    },
    {
      name: 'Convenios',
      route: '/',
      icon: '',
      hide: true,
    },
    {
      name: 'Descuentos',
      route: '/',
      icon: '',
      hide: true,
    },
    {
      name: `Faq's`,
      route: '/faqs',
      icon: ''
    },
    {
      name: 'Configurar',
      route: '/configuracion',
      icon: 'gear.png'
    }
  ]
}
