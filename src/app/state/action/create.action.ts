import { createAction, props } from '@ngrx/store';
import { Contact } from '../../interfaces/contact';


//create contacts
export const createContact = createAction('[Contact] Create Contact', props<{ contact: Contact }>());
export const createContactSuccess = createAction('[Contact] Create Contact Success', props<{ contact: Contact }>());
export const createContactFailure = createAction('[Contact] Create Contact Failure', props<{ error: any }>());

// Load contacts
export const loadContacts = createAction('[Contact] Load Contact' );
export const loadContactsSuccess = createAction('[Contact] Load Contact Success', props<{ contacts: Contact[] }>());
export const loadContactsFailure = createAction('[Contact] Load Contact Failure', props<{ error: any }>());

// Update contact
export const updateContact = createAction('[Contact] Update Contact', props<{ contact: Contact }>());  //contacts change
export const updateContactSuccess = createAction('[Contact] Update Contact Success', props<{ contact: Contact }>());
export const updateContactFailure = createAction('[Contact] Update Contact Failure', props<{ error: any }>());

// Delete contact   
export const deleteContact = createAction('[Contact] Delete Contact', props<{ id: number }>());
export const deleteContactSuccess = createAction('[Contact] Delete Contact Success', props<{ id: number }>());
export const deleteContactFailure = createAction('[Contact] Delete Contact Failure', props<{ error: any }>());
