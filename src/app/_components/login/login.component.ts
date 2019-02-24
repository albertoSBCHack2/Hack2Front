import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../_dialogs/error-dialog/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public passHide = true;
  public submitButton = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private authServ: AuthService,
    private dialog: MatDialog
  ) {

    this.loginForm = this._fb.group(
      {
        nomUsuario: ['', Validators.required],
        contrasena: ['', Validators.required]
      }
    );

  }

  ngOnInit() {
  }

  getErrorMessage(control: string) {
    return this.loginForm.controls[control].hasError('required') ? 'Campo requerido' : '';
  }

  onSubmit() {
    this.submitButton = true;

    this.loginForm.get('nomUsuario').patchValue(this.loginForm.get('nomUsuario').value.trim());
    this.loginForm.get('contrasena').patchValue(this.loginForm.get('contrasena').value.trim());

    if (this.loginForm.valid) {
      this.authServ.login(this.loginForm.value)
        .pipe(
          take(1)
        ).subscribe((res: any) => {
          this.authServ.decodeToken(res.data);

          this._router.navigate(['/tabs']).then(() => this.submitButton = false);
        }, (err: any) => {
          this.submitButton = false;

          this.dialog.open(ErrorDialogComponent, {
            width: '400px',
            data: err.error.error.message
          });
        });
    }
  }

}
