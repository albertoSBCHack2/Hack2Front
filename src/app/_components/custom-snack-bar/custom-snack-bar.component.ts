import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-snack-bar',
  templateUrl: './custom-snack-bar.component.html',
  styleUrls: ['./custom-snack-bar.component.scss']
})
export class CustomSnackBarComponent implements OnInit {
  customSnackBarContent: any;
  constructor() { }

  ngOnInit() {
  }

}
