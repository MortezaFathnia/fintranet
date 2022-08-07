import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { setDetails } from '../+state/wizard.actions';

interface Status {
  name: string,
  code: number
}
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  form: FormGroup;

  date: Date;

  minDate: Date;

  maxDate: Date;

  status: Status[];

  submitted = false;

  selectedStatus: Status[];

  constructor(
    formBuilder: FormBuilder,
    private _router: Router,
    private store: Store<{ wizard: object }>
  ) {
    this.form = formBuilder.group({
      validAmount: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      date: [null, Validators.required],
      selectedStatus: [null, Validators.required],
      fund: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
    });
  }

  ngOnInit(): void {
    let today = new Date();
    this.minDate = new Date();
    let prev5Days = (today.getDay()) - 5;
    this.minDate.setDate(prev5Days);
    this.maxDate = new Date();

    this.status = [
      { name: 'OUTOFSTOCK', code: 2 },
      { name: 'INSTOCK', code: 1 },
      { name: 'LOWSTOCK', code: 0 },
      { name: 'FREE', code: -1 }
    ];
  }

  onSubmit(valid: boolean, value: any): void {
    if (valid) {
      this.store.dispatch(setDetails({ details: value }));
      this.submitted = true;
    }
  }

  nextStep() {
    this._router.navigate(['people'])
  }
}
