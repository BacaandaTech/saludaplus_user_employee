import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  faqs: any[];

  constructor() {
    this.faqs = [
      {
        title: "¿QUÉ ES SALUDA+?",
        description: "Una membresía que los empleadores pueden contratar para sus empleados para brindarles una protección extra ante cualquier inconveniente o accidente, así como brindándoles más herramientas para que puedan desarrollarse dentro de la empresa."
      },
      {
        title: "¿QUÉ COMPRENDE LA MEMBRESÍA?",
        description: "Servicios médicos, servicios corporativos, servicios financieros, desarrollo profesional, cumplimiento de la NOM-035."
      },
      {
        title: "¿CUÁLES SON LOS HORARIOS DE ATENCIÓN MÉDICA?",
        description: "9:00 am a 18:00 hrs Lunes a Sábado 30 minutos. Dentro México y USA."
      },
      {
        title: "¿QUÉ ES LA NOM-035?",
        description: "La ley que obliga a los empleadores establecer los elementos para identificar, analizar y prevenir los factores de riesgo psicosocial, así como para promover un entorno organizacional favorable en los centros de trabajo."
      },
      {
        title: "¿CÓMO CUMPLIMOS CON LA NOM-035?",
        description: "Al adquirir SALUDA+ te incluimos sin costo la encuesta de nivel de estrés que te obliga la ley a través de la NOM-035 a realizar periódicamente a tus empleados para garantizar un lugar de trabajo sano. Además ofrecemos diversos cursos para el desarrollo personal y profesional de los colaboradores reduciendo el estrés y manteniendo un excelente ambiente laboral."
      }
    ]
  }
}
