import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { CuentasService } from '../cuentas/cuentas.service';
import { take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

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
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.playReal();
  }

  onLogout() {
    this.stop();
    this.authServ.logout();
  }

  playReal() {
    if (!this.real) {
      this.real = setInterval(() => {
        this.cuentasServ.getPush()
          .pipe(
            take(1)
          ).subscribe((res: any) => {
            if (res.data) {
              this.snack.open(res.data.mensaje, 'OK', {
                horizontalPosition: 'center',
                verticalPosition: 'top'
              });
            }
          });
      }, 3000);
    }
  }

  stop() {
    clearInterval(this.real);
    this.real = undefined;
  }

}
