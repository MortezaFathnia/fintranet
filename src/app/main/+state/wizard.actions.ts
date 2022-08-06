import { createAction } from '@ngrx/store';

export const upload = createAction('[Upload Image Component] Upload Image', (image) => image);
export const setDetails = createAction('[Details Component] Set Details', (details) => details);
export const selectPeoples = createAction('[Select People Component] Select Peoples');