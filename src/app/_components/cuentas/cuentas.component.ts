import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import glider from 'glider-js';
import { CuentaDataSource, CuentasService } from './cuentas.service';
import { MatPaginator, MatSort } from '@angular/material';
import { AuthService } from 'src/app/_services/auth.service';

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

  constructor(
    public cuentasServ: CuentasService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const myGlider = new glider(this.glider.nativeElement, {
      slidesToShow: 'auto',
      slidesToScroll: 'auto',
    });
  }

  onBanco(idBanco: number) {
    const idUsuario = !this.authService.idUsuario ? localStorage.getItem('idUsuario') : this.authService.idUsuario;
    const token = !this.authService.token ? localStorage.getItem('token') : this.authService.token;

    this.cuentasServ.getDataCuenta(token, idUsuario, idBanco);
    this.dataSource = new CuentaDataSource(this.cuentasServ);
  }

}
