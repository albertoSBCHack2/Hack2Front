import { Component, OnInit, ɵConsole } from '@angular/core';
import { PadrinosService } from './padrinos.service';
import { take } from 'rxjs/operators';
import { ErrorDialogComponent } from '../_dialogs/error-dialog/error-dialog.component';

@Component({
  selector: 'app-padrinos',
  templateUrl: './padrinos.component.html',
  styleUrls: ['./padrinos.component.scss']
})
export class PadrinosComponent implements OnInit {
  displayedColumns: string[] = ['idUsuario', 'nombre'];
  // dataSource = ELEMENT_DATA;
  public godfathers: any = []
  dialog: any;
  constructor(
    private padrinosService: PadrinosService
  ) { }

  ngOnInit() {
    this.getGodfathers();
  }

  public getGodfathers(): void {
    // this.loadingLenders = true;
    this.padrinosService.getAll()
    .pipe(
      take(1)
    ).subscribe((res: any) => {
      this.godfathers = res.data;
    }, (err: any) => {
      this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        data: err.error.error.message
      });
    });
    //console.log(this.godfathers);
    // let subscription: Subscription = this.accountService
    //   .getLenderReservedActive()
    //   .subscribe(
    //     response => {
    //       this.lenderReservedActive = response;
    //     },
    //     (error) => {
    //       // this.app.showError(error);
    //       // this.loadingLenders = false;
    //       subscription.unsubscribe();
    //     }, () => {
    //       // this.loadingLenders = false;
    //       subscription.unsubscribe();
    //     }
    //   );
  }



}
