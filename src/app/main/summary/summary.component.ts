import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent  {

  summary$: Observable<number>;
 
  constructor(private store: Store<{ wizard: object }>) {
    
  }
}
