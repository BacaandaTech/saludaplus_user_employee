import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePolicieComponent } from './create-policie.component';

describe('CreatePolicieComponent', () => {
  let component: CreatePolicieComponent;
  let fixture: ComponentFixture<CreatePolicieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePolicieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePolicieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
