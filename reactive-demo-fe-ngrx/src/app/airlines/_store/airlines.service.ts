import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Favorize, Query } from './airlines.actions';
import { Airline } from './airlines.model';

import * as fromAirline from './airlines.reducer';

@Injectable()
export class AirlinesService {

  airlines$ = this._store.select(fromAirline.selectAll);

  constructor(private _store: Store<Airline>) {
  }

  query(country: string) {
    this._store.dispatch(new Query(country));
  }

  setFavorite(id: number, favorite: boolean) {
    this._store.dispatch(new Favorize({
      id: id,
      favorite: favorite
    }));
  }

}
