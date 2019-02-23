import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public navLinks: any = [
    { path: '', label: 'Mis cuentas' },
    { path: '', label: 'Mis padrinos' },
    { path: '', label: 'Mis ahijados' }
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
