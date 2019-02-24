import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CuentasService } from '../../cuentas/cuentas.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-asociar-cuenta-dialog',
  templateUrl: './asociar-cuenta-dialog.component.html',
  styleUrls: ['./asociar-cuenta-dialog.component.scss']
})
export class AsociarCuentaDialogComponent implements OnInit {

  public form: FormGroup;
  public submit = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<AsociarCuentaDialogComponent>,
    public cuentasServ: CuentasService,
    private snack: MatSnackBar
  ) {

    this.form = this._fb.group(
      {
        idBanco: ['', Validators.required],
        numCuenta: ['', Validators.required]
      }
    );

  }

  ngOnInit() {
    this.form.get('idBanco').patchValue(this.data);
  }

  asociar() {
    if (this.form.valid) {

      this.submit = true;

      this.cuentasServ.asociarCuenta(this.form.value)
        .pipe(
          take(1)
        ).subscribe((res: any) => {
          this.dialogRef.close();
        }, (err: any) => {
          this.submit = false;
          this.snack.open(err.error.error.message, 'OK', {
            duration: 2800
          });
        });
    }
  }

}
