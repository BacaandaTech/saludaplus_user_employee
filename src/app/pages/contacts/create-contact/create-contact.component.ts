import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss'],
})
export class CreateContactComponent {


  form = new FormGroup({
    firstName: new FormControl(''),
    paternalSurname: new FormControl(''),
    maternalSurname: new FormControl(''),
    phone: new FormControl(''),
    kinship: new FormControl(''),
    email: new FormControl(''),
    contact_type: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value)
  }
}
