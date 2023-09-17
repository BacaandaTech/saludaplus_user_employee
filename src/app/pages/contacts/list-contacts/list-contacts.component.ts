import { Component } from '@angular/core';
import { ContactTemporalService } from '../contact-temporal.service';
import { IListContact } from 'src/app/shared/interfaces/contacts/contact-interface';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent {
  contacts_services: ContactTemporalService;
  data: IListContact[] = [];

  constructor(contact_service: ContactTemporalService) {
    this.contacts_services = contact_service;
  }

  ngOnInit(): void {
    this.contacts_services.getAllContacts().subscribe((response) => {
      this.data = response;
    })
  }
}
