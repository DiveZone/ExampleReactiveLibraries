import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { AirlineActions, AirlineActionTypes, Favorized, Loaded } from './airlines.actions';
import { Airline } from './airlines.model';

export const airlinesAdapter = createEntityAdapter<Airline>();

export interface State extends EntityState<Airline> {
}

export const initialState: State = airlinesAdapter.getInitialState();

export function airlinesReducer(state: State = initialState,
                                action: AirlineActions) {
  switch (action.type) {
    case AirlineActionTypes.LOADED:
      return airlinesAdapter.setAll((action as Loaded).payload, state);
    case AirlineActionTypes.FAVORIZED:
      return airlinesAdapter.updateOne({id: (action as Favorized).payload.id, changes: action.payload}, state);
    default:
      return state;
  }

}

export const getAirlinesState = createFeatureSelector<State>('airlines');

export const {
  selectAll
} = airlinesAdapter.getSelectors(getAirlinesState);
