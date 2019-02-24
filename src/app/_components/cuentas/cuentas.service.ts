import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take, map, distinctUntilChanged } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { PageEvent, Sort } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  public dataChange: BehaviorSubject<any>;
  get data(): any { return this.dataChange.value; }
  public dataLength: number;
  public dataLoading: boolean;
  private flagBanco: number;

  constructor(public http: HttpClient) { }

  create() {
    this.dataChange = new BehaviorSubject<any>([]);
  }

  getDataCuenta(token: any, idUsuario: any, idBanco: number) {
    if (this.dataLoading && idBanco === this.flagBanco) {
      return;
    }

    this.flagBanco = idBanco;
    this.dataChange.next([]);
    this.dataLength = 0;
    this.dataLoading = true;

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };

    this.http.get<any>(`https://hack2-api.kobra.red/api/users/${idUsuario}/accounts?idBanco=${idBanco}`, httpOptions).
      pipe(
        take(1),
        distinctUntilChanged(),
        map(res => {
          return res.data;
        })
      ).subscribe((res: any) => {
        res.forEach((data: any) => {
          let url: string;
          switch (idBanco) {
            case 1: url = `https://hack2-api.kobra.red/api/hsbc/checking-accounts/balance?accountNumber=${data.numCuenta}`;
              break;
            case 2: url = `https://hack2-api.kobra.red/api/fin-lab/bank/${data.numCuenta}/balances`;
              break;
            case 3: url = `https://hack2-api.kobra.red/api/banregio/accounts/${data.numCuenta}/transancciones`;
              break;
          }

          this.http.get<any>(url, httpOptions)
            .pipe(
              take(1),
              map(res2 => {
                this.dataLoading = false;
                this.dataLength = res.length;
                return res2.data;
              })
            ).subscribe((res2: any) => {
              const copiedData: any = this.data.slice();
              copiedData.push(res2);
              this.dataChange.next(copiedData);
            });
        });
      });
  }
  obtenerCuentas() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };
    let idUsuario : number = +localStorage.getItem('idUsuario');

    return this.http.get('https://hack2-api.kobra.red/api/users/' + idUsuario +'/accounts', httpOptions)

  }

  asociarCuenta(cuenta: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.post<any>('https://hack2-api.kobra.red/api/accounts', cuenta, httpOptions);
  }

  transferir(transfer: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.post<any>('https://hack2-api.kobra.red/api/transfer', transfer, httpOptions);
  }

  getRetos(idBanco: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get<any>(`https://hack2-api.kobra.red/api/retos?idBanco=${idBanco}&vigente=true`, httpOptions);
  }

  getPush() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get<any>(`https://hack2-api.kobra.red/api/push-notifications`, httpOptions);
  }
}

export class CuentaDataSource extends DataSource<any> {

  pageChanges: BehaviorSubject<PageEvent> = new BehaviorSubject<PageEvent>({ length: 0, pageIndex: 0, pageSize: 10 });
  sortChanges: BehaviorSubject<Sort> = new BehaviorSubject<Sort>({ active: 'numCuenta', direction: 'asc' });

  constructor(private cuentaDatabase: CuentasService) {
    super();
  }

  connect(): Observable<any> {
    return combineLatest(this.cuentaDatabase.dataChange, this.pageChanges, this.sortChanges)
      .pipe(
        map(res => this.processData(res[0], res[1], res[2]))
      );
  }

  disconnect() {
    this.cuentaDatabase.dataLength = 0;
    this.cuentaDatabase.dataChange.complete();
    this.pageChanges.complete();
    this.sortChanges.complete();
  }

  processData(data: any, currentPage: PageEvent, currentSort: Sort): any {
    const startIndex = currentPage.pageIndex * currentPage.pageSize;

    if (!currentSort.active || currentSort.direction === '') {
      return data.splice(startIndex, currentPage.pageSize);
    }

    return data.slice().sort((a: any, b: any) => {
      const isAsc = currentSort.direction === 'asc';
      switch (currentSort.active) {
        case 'numCuenta': return this.compare(a.numCuenta, b.numCuenta, isAsc);
        default: return 0;
      }
    }).splice(startIndex, currentPage.pageSize);
  }

  private compare(a: any, b: any, isAsc: any) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
