import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Details } from 'src/app/interfaces/details';
import { Image } from 'src/app/interfaces/image';
import { People } from 'src/app/interfaces/people';
import { WizardState } from '../+state/wizard.reducer';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnDestroy {

  image: Image;
  details: Details = null;
  peoples: People[] = [];
  completed = false;

  summary$: Observable<object>;

  private ngDestroy$ = new Subject();

  constructor(private store: Store<{ wizard: object }>) {
    store.select('wizard').pipe(takeUntil(this.ngDestroy$))
      .subscribe((state: WizardState) => {
        this.image = state.image;
        if (state.details) {
          this.details = state.details;
        }
        this.peoples = state.peoples;
      });
  }

  completeWizard() {
    this.completed = true;
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
