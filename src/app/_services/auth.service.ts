import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;
  public idUsuario: any;
  public nomUsuario: string;

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  login(credentials: any): Observable<any> {
    return this.http.post('https://hack2-api.kobra.red/api/login', credentials);
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  decodeToken(token: any) {
    localStorage.setItem('token', token);
    const decodeToken = jwt_decode(token);
    localStorage.setItem('nomUsuario', decodeToken.data.nombre);
    localStorage.setItem('idUsuario', decodeToken.data.idUsuario);
    localStorage.setItem('idRol', decodeToken.data.idRol);

    this.token = token;
    this.idUsuario = decodeToken.data.idUsuario;
    this.nomUsuario = decodeToken.data.nombre;
  }
}
