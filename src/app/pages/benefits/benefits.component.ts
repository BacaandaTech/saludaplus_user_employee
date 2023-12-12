import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { PolicyService } from 'src/app/shared/services/policy/policy.service';
import { DomSanitizer } from '@angular/platform-browser';
import { getUserData } from 'src/app/shared/utils/utils';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-benefits',
  // template: `
  //   <section class="main-container-benefits">
  //     <iframe class="col-12" *ngIf="loaded_service" [src]="url_iframe" title="benefits-collaborator"></iframe>
  //   </section>
  // `,
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  @ViewChild('modalInfo') modal_info: any;
  bsModalRef?: BsModalRef;


  public loaded_service: boolean = false;
  public url_iframe: any = '';
  public name_user: string = '';
  public user_data: any | undefined = getUserData
  public benefits: any[];
  public benefit_select: any = {}

  constructor(
      private policy_service: PolicyService, 
      private sanitizer: DomSanitizer, 
      private modalService: BsModalService,
    ) {
    this.benefits = [
      {
        image: 'imagenRM.png',
        icon: 'iconRM.png',
        title: 'RED MÉDICA',
        description: 'Explora una red extensa de profesionales médicos altamente calificados y centros especializados. Con CLUB SALUDA+ tendrás acceso a servicios médicos de primera calidad, desde consultas generales hasta tratamientos especializados, garantizando que recibas la atención que mereces.',
        action: 'modal',
        text_long: `
        <h3>Servicios médicos</h3>

        <ul>
            <li>Cobertura de Muerte Accidental: $200,000.00 MXN.</li>
            <li>Cobertura por muerte en caso de asalto $20,000.00 MXN.</li>
            <li>Cobertura de gastos médicos por accidente hasta $25,000.00 MXN.</li>
            <li>Invalidez Total por Accidente $200,000.00 MXN.</li>
            <li>Pérdidas Orgánicas Escala "B" $200,000.00 MXN.</li>
            <li>Indemnización diaria por Hospitalización por accidente: -$300.00 MXN diarios hasta por 90 días.</li>
            <li>Quemaduras graves o fracturas $3,000 MXN.</li>
        </ul>
    
        <h3>Ambulancia Terrestre</h3>
        <p>2 Eventos al año</p>
    
        <h3>Telemedicina</h3>
        <p>Ilimitadas*<br>De 9 am a 6 pm Lun-Sab</p>
    
        <h3>Video Consultas Nutricionales</h3>
        <p>Ilimitadas*<br>Orientación, enfermedades (hipertensión, diabetes, etc).</p>
    
        <h3>Video Consultas Psicológica</h3>
        <p>Ilimitadas*<br>Angustia, Transtorno de personalidad, Violencia Intrafamiliar, Depresión, etc.</p>
    
        <h3>Médico a Domicilio</h3>
        <p>2 eventos * En México.</p>
    
        <p><strong>EN CASO DE ENFERMEDAD O ACCIDENTE QUE NO COMPROMETA LA VIDA DEL TITULAR, SE BRINDARÁ VIDEO ASISTENCIA MÉDICA PROPORCIONADA POR MÉDICOS GENERALES EN UN HORARIO DE:</strong></p>
        <p>9:00 am a 18:00 hrs Lunes a Sábado 30 minutos.<br>Dentro México y USA.</p>
    
        <p><strong>Esta asistencia médica comprende lo siguiente:</strong></p>
        <ul>
            <li>Consulta médica de valoración / si el médico lo considera se referirá con una especialista.</li>
            <li>Interpretación de Estudios.</li>
            <li>Puericultura y orientación materno-infantil.</li>
            <li>Indicaciones o contraindicaciones sobre el uso de medicamentos.</li>
            <li>Segunda opinión médica.</li>
            <li>Guía de curaciones o medidas de higiene para heridas o cambio de vendajes post operatorios.</li>
            <li>Orientación de primeros auxilios.</li>
            <li>CheckUp GRATIS Inicial por contratación:</li>
            <ul>
                <li>Examen General de Orina.</li>
                <li>Química Sanguínea de 6 Elementos.</li>
                <li>Electrocardiograma en Reposo.</li>
                <li>Factor RH.</li>
                <li>Reacciones Febriles en suero.</li>
                <li>Cultivo de exudado Faríngeo.</li>
                <li>Antígeno Prostático específico Total.</li>
            </ul>
        </ul>
    
        <h3>Consultas con médicos generales y especialistas</h3>
        <ul>
            <li>Consultas médico general desde $250.00 MXN cada cita</li>
            <li>Consulta médicos especialistas de $350.00 hasta $600.00 MXN 1er y 2ndo nivel y de $500.00 hasta $800.00 MXN alta especialidad.</li>
            <li>Descuentos en medicamentos con proveedores directos de nuestra red.</li>
            <li>Enfermera a domicilio a costo preferencial.</li>
        </ul>
    
        <p>Limpieza Dental Gratis (1 al año en consultorios de convenio).</p>
    
        <h3>Laboratorios</h3>
        <p>Del 5% al 40% de descuento en estudios de laboratorio o gabinete adicional un estudio gratis.</p>
    
        <h3>Recolección</h3>
        <p>Recolección del cuerpo.</p>
    
        <h3>Embalsamado</h3>
        <p>Servicio de embalsamado.</p>
    
        <h3>Velación</h3>
        <p>Sala de velación en funeraria de red o velación a domicilio (ataúd sin costo).</p>
    
        <h3>Traslado</h3>
        <p>Traslado en carroza para inhumación o cremación, servicio de cremación y urna para cenizas.</p>
    
        <p><strong>Esta Asistencia tendrá un periodo de espera de 90 días por muerte natural para los asegurados de 3 meses a 63 años de edad un periodo de espera de 180 días para los asegurados de 64 a 90 años de edad, a partir de la vigencia de cobertura.</strong></p>
        <p>La edad de aceptación para adicionales plan familiar es de 18 a 65 años.</p>
        `
      },
      {
        image: 'imagenCONT.png',
        icon: 'iconoCONT.png',
        title: 'CONTÁCTANOS',
        description: 'En Club SALUDA+, entendemos que tu salud es lo primero. Es por eso que te presentamos una puerta directa a la atención médica cuando más la necesitas. Hemos simplificado el acceso a la atención médica al proporcionarte números de teléfono especializados. Llama de inmediato para conectarte con nuestro equipo de profesionales de la salud, listos para brindarte asesoramiento y orientación personalizada.',
        action: 'modal',
        text_long: `
        <p>Recuerda que como miembro de Club SALUDA+, tienes acceso a servicios médicos excepcionales. Desde consultas telefónicas hasta orientación sobre tratamientos, nuestro equipo médico está aquí para apoyarte en cada paso de tu viaje hacia el bienestar.</p>
    
        <p>Para obtener asistencia médica inmediata, marca los números de proporcionados y experimenta el compromiso de Club SALUDA+ con tu bienestar. Recuerda que es importante tener tu número de póliza a la mano, éste lo encontrarás en la sección Mi póliza dentro de esta plataforma.</p>
        
        <h3>Servicios:</h3>
        <ul>
            <li><strong>Telemedicina</strong></li>
            <p>Ilimitadas*<br>De 9 am a 6 pm Lun-Sab</p>
            
            <li><strong>Video Consultas Nutricionales</strong></li>
            <p>Ilimitadas*<br>Orientación, enfermedades (hipertensión, diabetes, etc).</p>
            
            <li><strong>Video Consultas Psicológica</strong></li>
            <p>Ilimitadas*<br>Angustia, Transtorno de personalidad, Violencia Intrafamiliar, Depresión, etc.</p>
            
            <li><strong>Médico a Domicilio</strong></li>
            <p>2 eventos * En México.</p>
        </ul>
    
        <p>Agenda tu cita y/o recibe atención telefónica llamando al <strong>55 8842 7862</strong></p>
        `
      },
      {
        image: 'imagenWAPP.png',
        icon: 'iconoWAPP.png',
        title: 'WHATSAPP',
        description: 'Ya sea para obtener atención médica incluida, agendar una cita o resolver dudas sobre los beneficios del CLUB SALUDA+, nuestro equipo está disponible en WhatsApp para ofrecerte asistencia inmediata. Simplemente envía un mensaje y estarás conectado/a con profesionales de la salud y expertos en bienestar, listos para guiarte en cada aspecto de tu salud.',
        action: 'https://api.whatsapp.com/message/ZZJ5HQRSR54MK1?autoload=1&app_absent=0'
      },
      {
        image: 'imageBENEF.png',
        icon: 'iconoBENEF.png',
        title: '+ BENEFICIOS',
        description: 'En Club SALUDA+ no solo nos preocupamos por tu salud, sino también por tu bienestar general. Haz clic aquí y descubrirás una amplia gama de descuentos exclusivos diseñados para mejorar tu calidad de vida.',
        action: ''
      }
    ]
  }

  ngOnInit(): void {
    this.openBenefits();
    this.name_user = this.user_data().meta.name.toUpperCase();
  }

  openBenefits(): void {
    this.policy_service.openBenefits().subscribe({
      next: (response: any) => {
        if (response.status === 200) {
          this.loaded_service = true;
          this.url_iframe = response.data.url;
          this.benefits.find((i) => i.title === '+ BENEFICIOS').action = this.url_iframe
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error, 'No se pudo cargar')
      }
    })
  }
  openModal(template: TemplateRef<any>, benefit: any): void {
    
    this.benefit_select = this.benefits.find(i => i.title === benefit.title)
    if (benefit.action === 'modal') this.bsModalRef = this.modalService.show(template);
    else window.open(benefit.action, '_blank');
  }
}