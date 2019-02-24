import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentasService } from '../../cuentas/cuentas.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-nueva-cuenta-dialog',
  templateUrl: './nueva-cuenta-dialog.component.html',
  styleUrls: ['./nueva-cuenta-dialog.component.scss']
})
export class NuevaCuentaDialogComponent implements OnInit {

  public form: FormGroup;
  public submit = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<NuevaCuentaDialogComponent>,
    public cuentasServ: CuentasService,
    private snack: MatSnackBar
  ) {

    this.form = this._fb.group(
      {
        nombre: ['', Validators.required],
        apellidoPaterno: ['', Validators.required],
        apellidoMaterno: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        ine: ['', Validators.required],
        cardIdentification: ['', Validators.required],
        celular: ['', Validators.required]
      }
    );

  }

  ngOnInit() {
  }

  nueva() {
    if (this.form.valid) {

      this.submit = true;

      // this.cuentasServ.transferir(this.form.value)
      //   .pipe(
      //     take(1)
      //   ).subscribe((res: any) => {
      //     this.dialogRef.close();
      //   }, (err: any) => {
      //     this.submit = false;
      //     this.snack.open(err.error.error.message, 'OK', {
      //       duration: 2800
      //     });
      //   });
    }
  }

}
