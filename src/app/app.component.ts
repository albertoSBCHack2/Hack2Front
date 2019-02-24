import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { fadeAnimation } from './_animations/animatios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit, OnDestroy {

  public loadingScreen: any;
  public progress = false;
  protected _onDestroy = new Subject<void>();

  constructor(private _router: Router) {

  }

  ngOnInit() {
    this.setRouterEvents();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  setRouterEvents() {
    this._router.events
      .pipe(
        takeUntil(this._onDestroy),
        filter(event => event instanceof NavigationStart)
      ).subscribe(() => {
        this.progress = true;
        this.loadingScreen = document.getElementById('loadingScreen');
      });

    this._router.events
      .pipe(
        takeUntil(this._onDestroy),
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.progress = false;

        if (this.loadingScreen) {
          this.loadingScreen.style.opacity = 0;
          setTimeout(() => {
            this.loadingScreen.remove();
          }, 600);
        }
      });

    this._router.events
      .pipe(
        takeUntil(this._onDestroy),
        filter(event => event instanceof NavigationCancel)
      ).subscribe(() => {
        this.progress = false;
      });
  }

}
