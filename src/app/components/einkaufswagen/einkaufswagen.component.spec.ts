import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinkaufswagenComponent } from './einkaufswagen.component';

describe('EinkaufswagenComponent', () => {
  let component: EinkaufswagenComponent;
  let fixture: ComponentFixture<EinkaufswagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinkaufswagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinkaufswagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
