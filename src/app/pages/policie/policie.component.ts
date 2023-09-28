import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/shared/services/policy/policy.service';
import { IPolicy } from 'src/app/shared/interfaces/policy.interface';
@Component({
  selector: 'app-policie',
  templateUrl: './policie.component.html',
  styleUrls: ['./policie.component.scss'],
})
export class PolicieComponent implements OnInit {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  policy?: IPolicy;
  user_name: string = ''

  constructor(private policy_service: PolicyService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  ngOnInit(): void {
    this.getData();    
  }
  getData(): void {
    this.policy_service.getPolicy().subscribe((response: any) => {
      this.policy = this.formatPolicie(response.data.user_requests[0])
      this.user_name = this.policy.user_name
    })
  }
  formatPolicie(data: any) :IPolicy {
    const policie: IPolicy = {
      folio_id: data.brand_policy.policy.id,
      folio: data.brand_policy.policy.folio,
      status: data.status,
      user_id: data.user.id,
      user_name: `${data.user.meta.name} ${data.user.meta.last_name} ${data.user.meta.second_last_name}`,
      created_at: new Date(data.brand_policy.created_at),
      expired_at: new Date(data.brand_policy.expired_at),
      identification: data.documentation.find((i: any) => i.type_document === 'identification') ? data.documentation.find((i: any) => i.type_document === 'identification').url : undefined,
      contract: data.documentation.find((i: any) => i.type_document === 'contract') ? data.documentation.find((i: any) => i.type_document === 'contract').url : undefined,
    }
    return policie;
  }
  getColorStatus(status?: string): string {
    if (status === 'pending') return 'dot-yellow'
    return ''
  }
}
