import { Injectable } from '@angular/core';
import { IListPolicie } from 'src/app/shared/interfaces/policies/list-policie';
import { IPolicie } from 'src/app/shared/interfaces/policies/list-policie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicieTemporalService {

  constructor() { }

  policies: IPolicie[] = [
    { uuid: '550e8400-e29b-41d4-a716-446655440000', beneficiary_name: 'Oscar', sign_document: 'a.pdf', id_card_document: 'card.pdf' ,date: '01-06-2023', name_police: 'Poliza A', vigency: '01-06-2024', status: true },
    { uuid: '550e8400-e29b-41d4-a716-446655440001', beneficiary_name: 'Ana', sign_document: 'b.pdf', id_card_document: 'card2.pdf' ,date: '02-06-2023', name_police: 'Poliza B', vigency: '02-06-2024', status: false },
    { uuid: '550e8400-e29b-41d4-a716-446655440002', beneficiary_name: 'Pedro', sign_document: 'c.pdf', id_card_document: 'card3.pdf' ,date: '03-06-2023', name_police: 'Poliza C', vigency: '03-06-2024', status: true },
    { uuid: '550e8400-e29b-41d4-a716-446655440003', beneficiary_name: 'Maria', sign_document: 'd.pdf', id_card_document: 'card4.pdf' ,date: '04-06-2023', name_police: 'Poliza D', vigency: '04-06-2024', status: false },
    { uuid: '550e8400-e29b-41d4-a716-446655440004', beneficiary_name: 'Luis', sign_document: 'e.pdf', id_card_document: 'card5.pdf' ,date: '05-06-2023', name_police: 'Poliza E', vigency: '05-06-2024', status: true },
  ];

  getAllPolicies(): Observable<IListPolicie[]> {
    return of(this.policies);
  }
  getPolicie(uuid: string): Observable<IPolicie | undefined> {
    return of(this.policies.filter(i => i.uuid === uuid)[0]);
  }
}