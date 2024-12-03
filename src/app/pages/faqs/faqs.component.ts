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
        description: "SaludA+, la red médica más grande de México. Una membresía de bienestar para los mexicanos enfocada a mejorar la salud de forma preventiva y reactiva por medio de atención médica inmediata de calidad."
      },
      {
        title: "¿QUÉ COMPRENDE LA MEMBRESÍA?",
        description: "Servicios médicos, coberturas por accidentes personales, servicios funerarios, servicios corporativos, servicios financieros y cursos de desarrollo personal y profesional."
      },
      {
        title: "¿CUÁLES SON LOS HORARIOS DE ATENCIÓN MÉDICA?",
        description: ""
      },
      {
        title: "¿QUÉ ES LA NOM-035?",
        description: "Es una norma oficial mexicana que obliga a los empleadores a establecer los elementos para identificar, analizar y prevenir los factores de riesgo psicosocial, así́ como para promover un entorno organizacional favorable en los centros de trabajo."
      },
      {
        title: "¿CÓMO SE CUMPLE CON LA NOM-035?",
        description: "Al adquirir SALUDA+ te incluimos sin costo la encuesta de nivel de estrés que te obliga la ley a través de la NOM-035 a realizar periódicamente a tus empleados para garantizar un lugar de trabajo sano. Además, ofrecemos diversos cursos y asistencia psicológica y nutricional para el desarrollo personal y profesional de los colaboradores reduciendo el estrés y manteniendo un excelente ambiente laboral.\nDe esta forma no solo se benefician directamente los trabajadores, sino también las empresas que ofrecen esta membresía a sus colaboradores, al cumplir con la norma oficial mexicana y cuidar de sus trabajadores."
      },
      {
        title: "¿CÓMO SOLICITAR LOS BENEFICIOS DE MI MEMBRESÍA?",
        html: "<p>Debe iniciar sesión como usuario desde nuestra página web, saludaplus.com. Una vez dentro de su cuenta encontrará el apartado beneficios, donde podrá marcar al call center o solicitar algún servicio por WhatsApp según el servicio que deseé.</p><ol><li>Para asistencia de urgencias marque al <strong>55 8842 7862. <em>Guarde este número como SaludA+ Urgencias</em></strong></li><li>Para la solicitud de un beneficio o servicio que tenga que ser bajo cita, solicítelo por mensaje de WhatsApp al <strong>55 6848 5770. <em>Guarde este número como SaludA+ Solicitudes</em></strong></li><li>Tenga a la mano su número de membresía o certificado.</li></ol>"
      },
      {
        title: "¿CÓMO SOLICITAR MIS DESCUENTOS?",
        html: "<ol><li>Entra a tu cuenta de usuario desde nuestro sitio web saludaplus.com.</li><li>Da clic en el apartado <strong>beneficios</strong> y después en el apartado <strong>más beneficios</strong>.</li><li>Ingresa tu número de certificado.</li><li>Da clic en el apartado <strong>descuento</strong> y explora los descuentos que tienes por categoría.</li><li>Puedes consultar descuentos y el <strong>2x1 en cines</strong> desde WhatsApp.</li></ol>"
      },
      {
        title: "¿CÓMO SOLICITAR LAS COBERTURAS O ASISTENCIA FUNERARIO?",
        html: "<div><p class=\"mb-0\">Debe marcar al call center, <strong>55 8842 7862</strong></p><p class=\"mb-0\">Debe contener el certificado original firmado por el titular.</p><p class=\"mb-0\">Solicite la cobertura o el servicio según corresponda.</p><p class=\"mb-0\">Le orientarán sobre los requisitos para realizar el trámite con la aseguradora.</p></div>"
      },
      {
        title: "¿PROBLEMAS CON MI CUENTA O BENEFICIOS?",
        html: "<div>Marque o mande mensaje de WhatsApp al <strong>44 6117 6926</strong>.</div>"
      },
    ]
  }
}
