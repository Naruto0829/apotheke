import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterNachrichtDialogComponent } from './after-nachricht-dialog.component';

describe('AfterNachrichtDialogComponent', () => {
  let component: AfterNachrichtDialogComponent;
  let fixture: ComponentFixture<AfterNachrichtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterNachrichtDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterNachrichtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
