import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { upload, setDetails, selectPeoples } from './wizard.actions';

export interface WizardState {
  image:{},
  details:{},
  peoples:[]
}

export const initialState={
  image:{},
  details:{},
  peoples:[]
}

export function wizardReducer(
  state = initialState,
  action: ReturnType<typeof upload> | ReturnType<typeof setDetails>,
) {
  switch (action.type) {
    case upload.type:
      return {
        ...state,
        image:action.image
      }
    case setDetails.type:
      return{
        ...state,
        details:action.details
      }
    default:
      return state
  }
}


export const getImageState =
  createFeatureSelector<WizardState>('image');
