import { Component, OnInit, ɵConsole } from '@angular/core';
import { PadrinosService } from './padrinos.service';
import { take } from 'rxjs/operators';
import { ErrorDialogComponent } from '../_dialogs/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-padrinos',
  templateUrl: './padrinos.component.html',
  styleUrls: ['./padrinos.component.scss']
})
export class PadrinosComponent implements OnInit {
  displayedColumns: string[] = ['nombre'];
  // dataSource = ELEMENT_DATA;
  public godfathers: any = []
  // private dialog: MatDialog
  constructor(
    private padrinosService: PadrinosService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    if (+localStorage.getItem('idRol') == 1) {
      this.getGodsons();
    } else {
      this.getGodfathers();
    }
  }

  public getGodfathers(): void {
    this.padrinosService.getAllGodfathers(+localStorage.getItem('idUsuario'))
    .pipe(
      take(1)
    ).subscribe((res: any) => {
      this.godfathers = res.data;
    }, (err: any) => {
      this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: err.error.error.message
      });
    });
  }
  public getGodsons(): void {
    this.padrinosService.getAllGodsons(+localStorage.getItem('idUsuario'))
    .pipe(
      take(1)
    ).subscribe((res: any) => {
      this.godfathers = res.data;
    }, (err: any) => {
      this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: err.error.error.message
      });
    });
  }



}
