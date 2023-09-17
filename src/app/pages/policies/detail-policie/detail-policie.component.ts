import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PolicieTemporalService } from '../policie-temporal.service';
import { IPolicie } from 'src/app/shared/interfaces/policies/list-policie';

@Component({
  selector: 'app-detail-policie',
  templateUrl: './detail-policie.component.html',
  styleUrls: ['./detail-policie.component.scss']
})
export class DetailPolicieComponent implements OnInit {
  policie: IPolicie | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _service: PolicieTemporalService
  ) {
    
  }

  ngOnInit(): void {
    this.getPolicie();
  }
  getPolicie() {
    this._service.getPolicie(this._route.snapshot.params['uuid']).subscribe((response) => {
      this.policie = response;
    });
  }
}
