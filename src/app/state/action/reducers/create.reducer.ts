import { createReducer, on } from '@ngrx/store';
import { Contact } from '../../../interfaces/contact';
import * as ContactsActions from '../create.action';
// import { ContactState } from '../../create.state'; 

export interface ContactState {
  contacts: Contact[];
  error: any;
}

export const initialState: ContactState = {
  contacts: [],
  error: null,
};

//state --obj
//action ---r,u,d
//reducer ---


export const contactsReducer = createReducer(
  initialState,
  on(ContactsActions.loadContactsSuccess, (state: ContactState, { contacts }) => {
    console.log('Reducer received contacts:', contacts);  // Log state update
    return {
      ...state,
      contacts,
      error: null,
    };
  })
);

on(ContactsActions.loadContactsFailure, (state: ContactState, { error }) => {
  console.error('Reducer Error:', error);
  return {
    ...state,
    error,
  };
});


  on(ContactsActions.createContactSuccess, (state: ContactState, { contact }) => {
    console.log('New Contact:', contact); // Logging the contact data

    return {
      ...state,
      contacts: [...state.contacts, contact],  // Add new contact to the list
      error: null,
    };
  }),
  
on(ContactsActions.createContactFailure, (state:ContactState, { error }) => ({
  ...state,
  error
}));

