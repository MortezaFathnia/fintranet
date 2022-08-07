import { Component, OnInit } from '@angular/core';
import { PeoplesService } from '../../services/peoples.service';

import { People } from 'src/app/interfaces/people';
import { Store } from '@ngrx/store';
import { setSelectedPeoples } from '../+state/wizard.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-people',
  templateUrl: './select-people.component.html',
  styleUrls: ['./select-people.component.scss']
})
export class SelectPeopleComponent implements OnInit {

  peoples: People[];

  people: People;

  selectedPeoples: People[];

  submitted=false;

  constructor(
    private peoplesService: PeoplesService,
    private _router: Router,
    private store: Store<{ wizard: object }>) { 

  }

  ngOnInit(): void {
    this.peoplesService.getPeoples().then(data => this.peoples = data);
  }

  selectPeople(){
    this.submitted=true;
    this.store.dispatch(setSelectedPeoples({ peoples: this.selectedPeoples }));
  }

  nextStep() {
    this._router.navigate(['summary'])
  }
}
