import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesDocsComponent } from './guides-docs.component';

describe('GuidesDocsComponent', () => {
  let component: GuidesDocsComponent;
  let fixture: ComponentFixture<GuidesDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidesDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
