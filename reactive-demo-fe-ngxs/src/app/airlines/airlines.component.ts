import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Query } from './_store/airlines.actions';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';

import { MatOption } from '@angular/material/core';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';

@Component({
    selector: 'demo-airlines',
    templateUrl: './airlines.component.html',
    imports: [MatFormField, MatSelect, MatOption, AirlinesListComponent]
})
export class AirlinesComponent {

  countries = ['Brazil', 'India', 'Mexico', 'Netherlands', 'Spain'];

  private _country = 'Netherlands';

  constructor(private _store: Store) {
    this.query(this._country);
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
    this.query(value);
  }

  private query(country: string) {
    this._store.dispatch(new Query(country));
  }

}
