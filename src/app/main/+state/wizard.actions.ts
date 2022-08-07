import { createAction } from '@ngrx/store';

export const upload = createAction('[Upload Image Component] Upload Image', (image) => image);
export const setDetails = createAction('[Details Component] Set Details', (details) => details);
export const setSelectedPeoples = createAction('[Select People Component] Select Peoples',(peoples)=>peoples);