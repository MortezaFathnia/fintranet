import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {

  image: any;
  details: any = null;
  peoples: any = [];

  summary$: Observable<number>;

  private ngDestroy$ = new Subject();

  ngOnInit(): void {

  }

  constructor(private store: Store<{ wizard: object }>) {
    store.select('wizard').pipe(takeUntil(this.ngDestroy$))
      .subscribe((state: any) => {
        this.image = state.image;
        if (state.details) {
          this.details = state.details;
        }
        this.peoples = state.peoples;
      });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
