import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { CuentasService } from '../cuentas/cuentas.service';
import { take } from 'rxjs/operators';
import { MatSnackBar, MatDialog, MatSnackBarConfig } from '@angular/material';
import { ErrorDialogComponent } from '../_dialogs/error-dialog/error-dialog.component';
import { CustomSnackBarComponent } from '../custom-snack-bar/custom-snack-bar.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  // public idRol: number = +localStorage.getItem('idRol');

  public real: any;

  public navLinks: any = [
    { path: 'cuentas', label: 'Mis cuentas', icon: 'account_balance' },
    { path: 'padrinos', label: +localStorage.getItem('idRol') === 1 ? 'Mis ahijados' : 'Mis padrinos', icon: 'face' },
    { path: 'retos', label: 'Retos', icon: 'whatshot' },
  ];

  constructor(
    private authServ: AuthService,
    private cuentasServ: CuentasService,
    private snack: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.playReal();
  }

  onLogout() {
    this.stop();
    this.authServ.logout();
  }
//   showCustomSnackbar(snackbarContent: string) {
//     let config = new MatSnackBarConfig();
//     config.panelClass = 'center';
//     let snackbarRef = this.snack.openFromComponent(CustomSnackBarComponent,config);
//     snackbarRef.instance.customSnackBarContent = snackbarContent;
// }

  playReal() {
    if (!this.real) {
      this.real = setInterval(() => {
        this.cuentasServ.getPush()
          .pipe(
            take(1)
          ).subscribe((res: any) => {
            // this.showCustomSnackbar('HEEEYYY');
            if (res.data) {
              this.snack.open(res.data.mensaje, 'OK', {
                horizontalPosition: 'center',
                verticalPosition: 'top'
              });
            }
          }, (err: any) => {
            this.dialog.open(ErrorDialogComponent, {
              width: '400px',
              data: err.error.error.message
            });
          });
      }, 3000);
    }
  }

  stop() {
    clearInterval(this.real);
    this.real = undefined;
  }

}
