// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { ContactState } from '../reducers/create.reducer';

// export const selectContactsState = createFeatureSelector<ContactState>('contacts');

// export const selectAllContacts = createSelector(
//   selectContactsState,
//   (state: ContactState) => state.contacts
// );

// export const selectContactsError = createSelector(
//   selectContactsState,
//   (state: ContactState) => state.error
// );
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactState } from '../reducers/create.reducer';

export const selectContactState = createFeatureSelector<ContactState>('contacts');

export const selectAllContacts = createSelector(
  selectContactState,
  (state: ContactState) => state.contacts
);
