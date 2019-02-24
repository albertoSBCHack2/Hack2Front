import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaDialogComponent } from './transferencia-dialog.component';

describe('TransferenciaDialogComponent', () => {
  let component: TransferenciaDialogComponent;
  let fixture: ComponentFixture<TransferenciaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
