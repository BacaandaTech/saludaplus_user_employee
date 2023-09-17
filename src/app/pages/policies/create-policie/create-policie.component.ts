import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-create-policie',
  templateUrl: './create-policie.component.html',
  styleUrls: ['./create-policie.component.scss'],
})
export class CreatePolicieComponent {

  form = new FormGroup({
    firstName: new FormControl(''),
    paternalSurname: new FormControl(''),
    maternalSurname: new FormControl(''),
    phone: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    payment_method: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value)
  }
}
