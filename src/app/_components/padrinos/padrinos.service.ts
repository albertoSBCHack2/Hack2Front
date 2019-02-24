import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PadrinosService {

  constructor(
    private httpClient: HttpClient,
  ) { }
  public getAllGodfathers(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.httpClient.get('https://hack2-api.kobra.red/api/users/' + id +'/godfathers', httpOptions)
  }
  public getAllGodsons(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.httpClient.get('https://hack2-api.kobra.red/api/users/' + id +'/godsons', httpOptions)
  }

}
