import { Component, OnInit } from '@angular/core';
import { PolicieTemporalService } from '../policie-temporal.service';
import { IListPolicie } from 'src/app/shared/interfaces/policies/list-policie';
@Component({
  selector: 'app-list-policies',
  templateUrl: './list-policies.component.html',
  styleUrls: ['./list-policies.component.scss']
})
export class ListPoliciesComponent implements OnInit {

  policies_services: PolicieTemporalService;
  data: IListPolicie[] = [];

  constructor(policieService: PolicieTemporalService) {
    this.policies_services = policieService;
  }

  ngOnInit(): void {
    this.policies_services.getAllPolicies().subscribe((response) => {
      this.data = response;
    })
  }
}
