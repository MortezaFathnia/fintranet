import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  value1: number;

  value2: string;

  value3: string;

  date4: Date;

  minDate: Date;

  maxDate: Date;

  cities: City[];

  selectedCities: City[];

  constructor() { }

  ngOnInit(): void {
    let today = new Date();
    this.minDate = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

}
