import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import glider from 'glider-js';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.scss']
})
export class BancosComponent implements OnInit {

  @ViewChild('glider') public glider: ElementRef;

  constructor() { }

  ngOnInit() {
    const myGlider = new glider(this.glider.nativeElement, {
      slidesToShow: 'auto',
      slidesToScroll: 'auto',
    });
  }

}
