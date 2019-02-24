import { Component, OnInit } from '@angular/core';
import { RetosService } from './retos.service';
import { take } from 'rxjs/operators';
import { ErrorDialogComponent } from '../_dialogs/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CuentasService } from '../cuentas/cuentas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.scss']
})
export class RetosComponent implements OnInit {
  public challenges: any = [];
  public cuentas: any = [];
  public showButton: boolean = false;
  public showBackButton: boolean = false;
  public showFormChallenge: boolean = false;
  public ownerForm: FormGroup;

  constructor(
    private retosService: RetosService,
    private dialog: MatDialog,
    public cuentasService: CuentasService,
    private router: Router
  ) { }
  displayedColumns: string[] = ['nombrePadrino', 'monto', 'bono', 'fecCaducidad'];

  ngOnInit() {
    this.challenge();
    if (+localStorage.getItem('idRol') == 1) {
        this.showButton = true;
    }
    this.ownerForm = new FormGroup({
      banco: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      monto: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      bono: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      diasDelReto: new FormControl('', [Validators.required, Validators.maxLength(60)])
    });

  }

  private obtenerCuentas() {
    this.cuentasService.obtenerCuentas()
    .pipe(
      take(1)
    ).subscribe((res: any) => {
      this.cuentas = res.data;

    }, (err: any) => {
      this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: err.error.error.message
      });
    });
  }

  private saveChallenges = (ownerFormValue) => {

    console.log(ownerFormValue.banco)
    let challenge: any = {
      idCuenta: ownerFormValue.banco.idCuenta,
      idBanco: ownerFormValue.banco.idBanco,
      monto: ownerFormValue.monto,
      bono: ownerFormValue.bono,
      diasDelReto: ownerFormValue.diasDelReto
    }
    this.retosService.saveChallenges(challenge)
    .pipe(
      take(1)
    ).subscribe((res: any) => {
      this.router.navigate(['/tabs/cuentas']);

    }, (err: any) => {
      this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: err.error.error.message
      });
    });
  }

  public challenge(): void {
    this.retosService.getChallenges()
    .pipe(
      take(1)
    ).subscribe((res: any) => {
      this.challenges = res.data;
    }, (err: any) => {
      this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: err.error.error.message
      });
    });
  }

  public showForm(): void {
    this.showButton = !this.showButton;
    this.showFormChallenge = !this.showFormChallenge;
    if (this.showFormChallenge) {
        this.obtenerCuentas();
    } else {
      this.cuentas = [];
    }
    this.showBackButton = !this.showBackButton;
  }
}
