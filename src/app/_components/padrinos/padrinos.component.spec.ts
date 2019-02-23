import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrinosComponent } from './padrinos.component';

describe('PadrinosComponent', () => {
  let component: PadrinosComponent;
  let fixture: ComponentFixture<PadrinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadrinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadrinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
