import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import glider from 'glider-js';
import { CuentaDataSource, CuentasService } from './cuentas.service';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { AuthService } from 'src/app/_services/auth.service';
import { AsociarCuentaDialogComponent } from '../_dialogs/asociar-cuenta-dialog/asociar-cuenta-dialog.component';
import { TransferenciaDialogComponent } from '../_dialogs/transferencia-dialog/transferencia-dialog.component';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {

  @ViewChild('glider') public glider: ElementRef;
  displayedColumns: string[] = ['numCuenta', 'saldo'];
  dataSource: CuentaDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sortData: MatSort;
  public idBanco: number;

  constructor(
    public cuentasServ: CuentasService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.cuentasServ.create();
    this.dataSource = new CuentaDataSource(this.cuentasServ);

    const myGlider = new glider(this.glider.nativeElement, {
      slidesToShow: 'auto',
      slidesToScroll: 'auto',
    });
  }

  onBanco(idBanco: number) {
    this.idBanco = idBanco;
    const idUsuario = !this.authService.idUsuario ? localStorage.getItem('idUsuario') : this.authService.idUsuario;
    const token = !this.authService.token ? localStorage.getItem('token') : this.authService.token;

    this.cuentasServ.getDataCuenta(token, idUsuario, idBanco);
  }

  onAsociar() {
    this.dialog.open(AsociarCuentaDialogComponent, {
      width: '400px',
      data: this.idBanco
    });
  }

  onTransferir() {
    this.dialog.open(TransferenciaDialogComponent, {
      width: '400px',
      data: ''
    });
  }

}
