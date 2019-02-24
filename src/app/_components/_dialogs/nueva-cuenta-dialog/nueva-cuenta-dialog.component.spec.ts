import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCuentaDialogComponent } from './nueva-cuenta-dialog.component';

describe('NuevaCuentaDialogComponent', () => {
  let component: NuevaCuentaDialogComponent;
  let fixture: ComponentFixture<NuevaCuentaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCuentaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCuentaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
