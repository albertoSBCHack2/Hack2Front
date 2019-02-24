import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RetosService {

  constructor(
    private httpClient: HttpClient,
  ) { }
  public getChallenges(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.httpClient.get('https://hack2-api.kobra.red/api/retos', httpOptions)
  }
  public saveChallenges(challenge : any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.httpClient.post('https://hack2-api.kobra.red/api/retos', httpOptions, challenge)
  }

}
