import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IListContact } from 'src/app/shared/interfaces/contacts/contact-interface';

@Injectable({
  providedIn: 'root'
})
export class ContactTemporalService {

  constructor() { }

  contacts: IListContact[] = [
    {uuid: '530e8400-e29b-41d4-a716-446655440000', mother_name: 'Hernandez', father_name: 'Ordonez', name: 'Cristian'},
    {uuid: '530e8400-e29b-41d4-a716-446655440020', mother_name: 'Garcia', father_name: 'Lopez', name: 'Oscar'},
    {uuid: '530e8400-e29b-41d4-a716-446655440003', mother_name: 'Ramirez', father_name: 'Jimenez', name: 'Roberta'},
  ];

  getAllContacts(): Observable<IListContact[]> {
    return of(this.contacts);
  }
}