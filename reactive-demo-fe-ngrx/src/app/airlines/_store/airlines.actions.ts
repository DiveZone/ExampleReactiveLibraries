import { Action } from '@ngrx/store';
import { Airline } from './airlines.model';

export const QUERY = '[Airlines] query';
export const LOADED = '[Airlines] loaded';

export const FAVORIZE = '[Airlines] favorize';
export const FAVORIZED = '[Airlines] favorized';

export class Query implements Action {
  readonly type = QUERY;

  constructor(public payload: string) {
  }
}

export class Loaded implements Action {
  readonly type = LOADED;

  constructor(public payload: Airline[]) {
  }
}

export class Favorize implements Action {
  readonly type = FAVORIZE;

  constructor(public payload: Partial<Airline>) {
  }
}

export class Favorized implements Action {
  readonly type = FAVORIZED;

  constructor(public payload: Airline) {
  }
}

export type AirlinesActions =
  Query | Loaded |
  Favorize | Favorized;
