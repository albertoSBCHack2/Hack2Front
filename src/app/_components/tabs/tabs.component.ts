import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  // public idRol: number = +localStorage.getItem('idRol');

  public navLinks: any = [
    { path: 'cuentas', label: 'Mis cuentas' },
    { path: 'padrinos', label: +localStorage.getItem('idRol') == 1 ? 'Mis ahijados' : 'Mis padrinos' },
    { path: 'retos', label: 'Retos' }
  ];

  constructor(
    private authServ: AuthService
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.authServ.logout();
  }

}
