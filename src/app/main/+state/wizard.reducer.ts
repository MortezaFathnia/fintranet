import { createFeatureSelector } from '@ngrx/store';
import { Details } from 'src/app/interfaces/details';
import { Image } from 'src/app/interfaces/image';
import { People } from 'src/app/interfaces/people';
import { upload, setDetails, setSelectedPeoples } from './wizard.actions';

export interface WizardState {
  image: Image,
  details: Details,
  peoples: People[]
}

export const initialState = {
  image: {},
  details: {},
  peoples: []
}

export function wizardReducer(
  state = initialState,
  action: ReturnType<typeof upload> | ReturnType<typeof setDetails> | ReturnType<typeof setSelectedPeoples>,
) {
  switch (action.type) {
    case upload.type:
      return {
        ...state,
        image: action.image
      }
    case setDetails.type:
      return {
        ...state,
        details: action.details
      }
    case setSelectedPeoples.type:
      return {
        ...state,
        peoples: action.peoples
      }
    default:
      return state
  }
}


export const getImageState =
  createFeatureSelector<WizardState>('image');
