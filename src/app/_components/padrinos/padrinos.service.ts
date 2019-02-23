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
  public getAll(): Observable<any> {
    return this.httpClient.get('https://hack2-api.kobra.red/api/users/2/godfathers', {})
  }

}
