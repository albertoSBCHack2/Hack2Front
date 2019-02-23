import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import glider from 'glider-js';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {

  @ViewChild('glider') public glider: ElementRef;


  constructor() { }

  ngOnInit() {
    const myGlider = new glider(this.glider.nativeElement, {
      slidesToShow: 'auto',
      slidesToScroll: 'auto',
    });
  }

}
