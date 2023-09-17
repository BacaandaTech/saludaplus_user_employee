import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPolicieComponent } from './detail-policie.component';

describe('DetailPolicieComponent', () => {
  let component: DetailPolicieComponent;
  let fixture: ComponentFixture<DetailPolicieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPolicieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPolicieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
