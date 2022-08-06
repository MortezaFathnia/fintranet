import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  validAmount: number;

  date: Date;

  minDate: Date;

  maxDate: Date;

  fund: string;

  status: Status[];

  selectedStatus: Status[];

  constructor(
    formBuilder: FormBuilder,
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
      { name: 'active', code: 2 },
      { name: 'doing', code: 1 },
      { name: 'off', code: 0 },
      { name: 'disabled', code: -1 }
    ];
  }

  onSubmit(valid: boolean, value: any): void {
    console.log(valid, value);
    if (valid) {
      this.store.dispatch(setDetails({ details: value }));
    }
  }

  nextStep() {

  }
}
