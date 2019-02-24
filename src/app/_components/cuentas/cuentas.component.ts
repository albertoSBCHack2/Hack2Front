import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import glider from 'glider-js';
import { CuentaDataSource, CuentasService } from './cuentas.service';
import { MatPaginator, MatSort, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/_services/auth.service';
import { AsociarCuentaDialogComponent } from '../_dialogs/asociar-cuenta-dialog/asociar-cuenta-dialog.component';
import { TransferenciaDialogComponent } from '../_dialogs/transferencia-dialog/transferencia-dialog.component';
import { formAnimation, elAnimation } from 'src/app/_animations/animatios';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NuevaCuentaDialogComponent } from '../_dialogs/nueva-cuenta-dialog/nueva-cuenta-dialog.component';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss'],
  animations: [formAnimation, elAnimation]
})
export class CuentasComponent implements OnInit {

  @ViewChild('glider') public glider: ElementRef;
  displayedColumns: string[] = ['numCuenta', 'saldo'];
  dataSource: CuentaDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sortData: MatSort;
  public idBanco: number;
  public hideEl = false;
  public isGodfather: boolean = false;
  public isGodson: boolean = false;
  public retos$: Observable<any>;

  public logosURL = [
    'data:image/png;base64,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',
    'data:image/png;base64,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',
    'data:image/png;base64,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'
  ];

  constructor(
    public cuentasServ: CuentasService,
    private authService: AuthService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    let idRol: number = +localStorage.getItem('idRol');
    // if ( ) {
    // }
    idRol == 1 ? this.isGodfather = true : this.isGodson = true;
    this.cuentasServ.create();
    this.dataSource = new CuentaDataSource(this.cuentasServ);

    const myGlider = new glider(this.glider.nativeElement, {
      slidesToShow: 'auto',
      slidesToScroll: 'auto',
    });
  }

  onBanco(idBanco: number) {
    this.idBanco = idBanco;
    this.hideEl = true;
    const idUsuario = !this.authService.idUsuario ? localStorage.getItem('idUsuario') : this.authService.idUsuario;
    const token = !this.authService.token ? localStorage.getItem('token') : this.authService.token;

    this.cuentasServ.getDataCuenta(token, idUsuario, idBanco);
    this.retos$ = this.cuentasServ.getRetos(idBanco);
  }

  onAsociar() {
    const ref: MatDialogRef<AsociarCuentaDialogComponent> = this.dialog.open(AsociarCuentaDialogComponent, {
      width: '400px',
      data: this.idBanco
    });

    ref.afterClosed().toPromise().then((res: boolean) => {
      if (res) {
        const idUsuario = !this.authService.idUsuario ? localStorage.getItem('idUsuario') : this.authService.idUsuario;
        const token = !this.authService.token ? localStorage.getItem('token') : this.authService.token;

        this.cuentasServ.getDataCuenta(token, idUsuario, this.idBanco);
      }
    });
  }

  onTransferir() {
    const ref: MatDialogRef<TransferenciaDialogComponent> = this.dialog.open(TransferenciaDialogComponent, {
      width: '400px',
      data: this.cuentasServ.dataChange.value
    });

    ref.afterClosed().toPromise().then((res: boolean) => {
      if (res) {
        const idUsuario = !this.authService.idUsuario ? localStorage.getItem('idUsuario') : this.authService.idUsuario;
        const token = !this.authService.token ? localStorage.getItem('token') : this.authService.token;

        this.cuentasServ.getDataCuenta(token, idUsuario, this.idBanco);
      }
    });
  }

  changeBanco() {
    this.cuentasServ.dataChange.next([]);

    setTimeout(() => {
      this.retos$ = undefined;
      this.idBanco = undefined;
      this.hideEl = false;
    }, 340);
  }

  onNuevaCuenta() {
    const ref: MatDialogRef<NuevaCuentaDialogComponent> = this.dialog.open(NuevaCuentaDialogComponent, {
      width: '400px'
    });

    ref.afterClosed().toPromise().then((res: boolean) => {
      if (res) {

        this.snack.open('Felicidades!! Creaste una cuenta con Fiinlab!!', 'Cool', {
          duration: 2800
        });

        const idUsuario = !this.authService.idUsuario ? localStorage.getItem('idUsuario') : this.authService.idUsuario;
        const token = !this.authService.token ? localStorage.getItem('token') : this.authService.token;

        this.cuentasServ.getDataCuenta(token, idUsuario, this.idBanco);

      }
    });
  }

}
