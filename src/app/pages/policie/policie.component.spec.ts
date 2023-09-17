import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicieComponent } from './policie.component';

describe('PolicieComponent', () => {
  let component: PolicieComponent;
  let fixture: ComponentFixture<PolicieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
