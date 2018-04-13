import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Favorized, Loaded } from './airlines.actions';
import * as actions from './airlines.actions';
import { Airline } from './airlines.model';

export const airlinesAdapter = createEntityAdapter<Airline>();

export interface State extends EntityState<Airline> {
}

export const initialState: State = airlinesAdapter.getInitialState();

export function airlinesReducer(state: State = initialState,
                                action: actions.AirlinesActions) {
  switch (action.type) {
    case actions.LOADED:
      return airlinesAdapter.addAll((action as Loaded).payload, state);
    case actions.FAVORIZED:
      console.log(action.payload);
      return airlinesAdapter.updateOne({id: (action as Favorized).payload.id, changes: action.payload}, state);
    default:
      return state;
  }

}

export const getAirlinesState = createFeatureSelector<State>('airlines');

export const {
  selectAll
} = airlinesAdapter.getSelectors(getAirlinesState);
