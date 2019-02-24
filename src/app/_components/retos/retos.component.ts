import { Component, OnInit } from '@angular/core';
import { RetosService } from './retos.service';
import { take } from 'rxjs/operators';
import { ErrorDialogComponent } from '../_dialogs/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.scss']
})
export class RetosComponent implements OnInit {
  public challenges: any = [];
  public showButton: boolean = false;
  public showBackButton: boolean = false;
  public showFormChallenge: boolean = false;
  public ownerForm: FormGroup;

  constructor(
    private retosService: RetosService,
    private dialog: MatDialog,
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
      abono: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      diasDelReto: new FormControl('', [Validators.required, Validators.maxLength(60)])
    });

    // if (+localStorage.getItem('idRol') == 1) {
    //   console.log(1)
    // } else {
    //   console.log(2)
    //   this.getGodsoncchallenges();
    // }
  }

  private saveChallenges = (ownerFormValue) => {
    let challenge: any = {
      banco: ownerFormValue.banco,
      monto: ownerFormValue.monto,
      abono: ownerFormValue.abono,
      diasDelReto: ownerFormValue.fechaCaducidad
    }
    console.log(challenge)
    this.retosService.saveChallenges(challenge)
    .pipe(
      take(1)
    ).subscribe((res: any) => {
      console.log(res.data)
      //regresar
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
      console.log(res.data)
      this.challenges = res.data;
    }, (err: any) => {
      console.log(err);
      this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: err.error.error.message
      });
    });
  }

  public showForm(): void {
    this.showButton = !this.showButton;
    this.showBackButton = !this.showBackButton;
    this.showFormChallenge = !this.showFormChallenge;
  }
  // public getGodsonschallenges(): void {
  //   this.retosService.getAllGodsons(+localStorage.getItem('idUsuario'))
  //   .pipe(
  //     take(1)
  //   ).subscribe((res: any) => {
  //     this.challegesGodFather = res.data;
  //   }, (err: any) => {
  //     this.dialog.open(ErrorDialogComponent, {
  //       width: '400px',
  //       data: err.error.error.message
  //     });
  //   });
  // }

}
