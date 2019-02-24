import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public navLinks: any = [
    { path: 'cuentas', label: 'Mis cuentas', icon: 'account_balance' },
    { path: 'padrinos', label: 'Mis padrinos', icon: 'face' },
    { path: '', label: 'Mis ahijados', icon: 'favorite_border' }
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
