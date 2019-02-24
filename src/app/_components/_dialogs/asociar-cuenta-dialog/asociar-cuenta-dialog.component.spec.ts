import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarCuentaDialogComponent } from './asociar-cuenta-dialog.component';

describe('AsociarCuentaDialogComponent', () => {
  let component: AsociarCuentaDialogComponent;
  let fixture: ComponentFixture<AsociarCuentaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociarCuentaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociarCuentaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
