import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  login(credentials: any): Observable<any> {
    return this.http.post('https://hack2-api.kobra.red/api/login', credentials);
  }

  logout() {
    this._router.navigate(['/login']);
  }
}
