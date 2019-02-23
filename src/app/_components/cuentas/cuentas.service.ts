import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take, map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { PageEvent, Sort } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  public cuentadaData: any;
  public dataChange: BehaviorSubject<any[]>;
  get data(): any[] { return this.dataChange.value; }
  public dataLength: number;
  public dataLoading = true;

  constructor(public http: HttpClient) { }

  getDataCuenta(token: any, idUsuario: any, idBanco: number) {
    this.dataChange = new BehaviorSubject<any[]>([]);
    this.dataLength = 0;
    this.dataLoading = true;

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };

    this.http.get<any[]>(`https://hack2-api.kobra.red/api/users/${idUsuario}/accounts?idBanco=${idBanco}`, httpOptions).
      pipe(
        take(1),
        map(res => {
          console.log(res);
          this.dataLoading = false;
          this.dataLength = res.length;
          return res;
        })
      ).subscribe((datas: any[]) => {
        datas.forEach((data: any) => {
          const copiedData: any[] = this.data.slice();
          copiedData.push(data);
          this.dataChange.next(copiedData);
        });
      });
  }
}

export class CuentaDataSource extends DataSource<any> {

  pageChanges: BehaviorSubject<PageEvent> = new BehaviorSubject<PageEvent>({ length: 0, pageIndex: 0, pageSize: 10 });
  sortChanges: BehaviorSubject<Sort> = new BehaviorSubject<Sort>({ active: 'numCuenta', direction: 'asc' });

  constructor(private cuentaDatabase: CuentasService) {
    super();
  }

  connect(): Observable<any[]> {
    return combineLatest(this.cuentaDatabase.dataChange, this.pageChanges, this.sortChanges)
      .pipe(
        map(res => this.processData(res[0], res[1], res[2]))
      );
  }

  disconnect() {
    this.cuentaDatabase.dataChange.complete();
    this.pageChanges.complete();
    this.sortChanges.complete();
  }

  processData(ventas: any[], currentPage: PageEvent, currentSort: Sort): any[] {
    const startIndex = currentPage.pageIndex * currentPage.pageSize;

    if (!currentSort.active || currentSort.direction === '') {
      return ventas.splice(startIndex, currentPage.pageSize);
    }

    return ventas.slice().sort((a: any, b: any) => {
      const isAsc = currentSort.direction === 'asc';
      switch (currentSort.active) {
        case 'numCuenta': return this.compare(a.numCuenta, b.numCuenta, isAsc);
        default: return 0;
      }
    }).splice(startIndex, currentPage.pageSize);
  }

  private compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
