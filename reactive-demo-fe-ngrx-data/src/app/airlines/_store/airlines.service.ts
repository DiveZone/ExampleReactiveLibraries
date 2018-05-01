import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Airline } from './airlines.model';

import * as fromAirline from './airlines.reducer';
import * as airlineActions from './airlines.actions';

@Injectable()
export class AirlinesService {

  airlines$ = this._store.select(fromAirline.selectAll);

  constructor(private _store: Store<Airline>) {
  }

  query(country: string) {
    this._store.dispatch(new airlineActions.Query(country));
  }

  setFavorite(id: number, favorite: boolean) {
    this._store.dispatch(new airlineActions.Favorize({
      id: id,
      favorite: favorite
    }));
  }

}
