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
        title: "¿CÓMO HAGO VÁLIDO MI SEGURO?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, optio similique animi dignissimos quos quidem veritatis dolor sunt mollitia impedit voluptate aut facere ducimus cum. Quae beatae ipsam quaerat quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus aliquid quidem ea ipsa? Nesciunt laudantium ducimus vel, explicabo officiis repellat beatae sequi nisi eveniet obcaecati quam totam! Dolorum, voluptatibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti iure deleniti temporibus labore deserunt esse veritatis ullam, harum iusto mollitia nobis, alias modi aliquid, incidunt possimus necessitatibus ducimus nesciunt numquam?"
      },
      {
        title: "¿QUÉ  BENEFICIOS TENGO?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, optio similique animi dignissimos quos quidem veritatis dolor sunt mollitia impedit voluptate aut facere ducimus cum. Quae beatae ipsam quaerat quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus aliquid quidem ea ipsa? Nesciunt laudantium ducimus vel, explicabo officiis repellat beatae sequi nisi eveniet obcaecati quam totam! Dolorum, voluptatibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti iure deleniti temporibus labore deserunt esse veritatis ullam, harum iusto mollitia nobis, alias modi aliquid, incidunt possimus necessitatibus ducimus nesciunt numquam?"
      }
    ]
  }
}
