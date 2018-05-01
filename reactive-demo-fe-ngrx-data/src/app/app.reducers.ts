import { ActionReducerMap } from '@ngrx/store';
import { airlinesReducer } from './airlines/_store/airlines.reducer';

export const reducers: ActionReducerMap<any> = {
  airlines: airlinesReducer
};
