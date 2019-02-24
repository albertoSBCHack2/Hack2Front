import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { CuentasService } from '../../cuentas/cuentas.service';

@Component({
  selector: 'app-transferencia-dialog',
  templateUrl: './transferencia-dialog.component.html',
  styleUrls: ['./transferencia-dialog.component.scss']
})
export class TransferenciaDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<TransferenciaDialogComponent>,
    public cuentasServ: CuentasService,
    private snack: MatSnackBar
  ) {

    this.form = this._fb.group(
      {
        sourceAccount: ['', Validators.required],
        destinationAccount: ['', Validators.required],
        transactionAmount: ['', Validators.required],
        description: ['', Validators.required]
      }
    );

  }

  ngOnInit() {
  }

  transferir() {
    this.dialogRef.close();
  }

}
