import { Action } from '@ngrx/store';
import { Airline } from './airlines.model';

export enum AirlineActionTypes {
  QUERY = '[Airlines] query',
  LOADED = '[Airlines] loaded',

  FAVORIZE = '[Airlines] favorize',
  FAVORIZED = '[Airlines] favorized'
}

export class Query implements Action {
  readonly type = AirlineActionTypes.QUERY;

  constructor(public payload: string) {
  }
}

export class Loaded implements Action {
  readonly type = AirlineActionTypes.LOADED;

  constructor(public payload: Airline[]) {
  }
}

export class Favorize implements Action {
  readonly type = AirlineActionTypes.FAVORIZE;

  constructor(public payload: Partial<Airline>) {
  }
}

export class Favorized implements Action {
  readonly type = AirlineActionTypes.FAVORIZED;

  constructor(public payload: Airline) {
  }
}

export type AirlineActions =
  Query | Loaded |
  Favorize | Favorized;
