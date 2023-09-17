import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoliciesComponent } from './list-policies.component';

describe('ListPoliciesComponent', () => {
  let component: ListPoliciesComponent;
  let fixture: ComponentFixture<ListPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
