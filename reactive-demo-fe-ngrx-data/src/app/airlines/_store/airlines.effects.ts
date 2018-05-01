import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import * as airlinesActions from './airlines.actions';
import { Airline } from './airlines.model';

@Injectable()
export class AirlinesEffects {

  @Effect()
  load$: Observable<Action> = this.actions$.ofType(airlinesActions.QUERY)
    .map((action: airlinesActions.Query) => action.payload)
    .switchMap(payload => this._http.get<Airline[]>(`/api/airline/${payload}`))
    .map(list => new airlinesActions.Loaded(list));

  @Effect()
  modify$: Observable<Action> = this.actions$.ofType(airlinesActions.FAVORIZE)
    .map((action: airlinesActions.Favorize) => action.payload)
    .switchMap((airline: Airline) => {
      return this._http
        .get<Airline>(`/api/airline/${airline.id}/${airline.favorite}`);
    })
    .map(airline => new airlinesActions.Favorized(airline));

  constructor(private actions$: Actions,
              private _http: HttpClient) {
  }
}
