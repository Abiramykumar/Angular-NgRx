// import { createAction, props } from '@ngrx/store';
// import { Contact } from '../../interfaces/contact';

// // Action Types
// export const Create_Contact = '[Contact] Create Contact';
// export const Create_ContactSuccess = '[Contact] Create Contact Success';
// export const Create_ContactFailure = '[Contact] Create Contact Failure';

// export const Load_Contacts = '[Contact] Load Contacts'; // Plural for consistency
// export const Load_ContactsSuccess = '[Contact] Load Contacts Success';
// export const Load_ContactsFailure = '[Contact] Load Contacts Failure';

// // Create Contacts
// export const createContact = createAction(Create_Contact, props<{ contact: Contact }>());
// export const createContactSuccess = createAction(Create_ContactSuccess, props<{ contact: Contact }>());
// export const createContactFailure = createAction(Create_ContactFailure, props<{ error: any }>());

// // Load Contacts
// export const loadContacts = createAction(Load_Contacts); // Use constant
// export const loadContactsSuccess = createAction(Load_ContactsSuccess, props<{ contacts: Contact[] }>());
// export const loadContactsFailure = createAction(Load_ContactsFailure, props<{ error: any }>());

// // Update Contact
// export const updateContact = createAction('[Contact] Update Contact', props<{ contact: Contact }>());
// export const updateContactSuccess = createAction('[Contact] Update Contact Success', props<{ contact: Contact }>());
// export const updateContactFailure = createAction('[Contact] Update Contact Failure', props<{ error: any }>());

// // Delete Contact
// export const deleteContact = createAction('[Contact] Delete Contact', props<{ id: number }>());
// export const deleteContactSuccess = createAction('[Contact] Delete Contact Success', props<{ id: number }>());
// export const deleteContactFailure = createAction('[Contact] Delete Contact Failure', props<{ error: any }>());
import { createAction, props } from '@ngrx/store';
import { Contact } from '../../interfaces/contact';

// Action Types
export const Create_Contact = '[Contact] Create Contact';
export const Create_ContactSuccess = '[Contact] Create Contact Success';
export const Create_ContactFailure = '[Contact] Create Contact Failure';

export const Load_Contacts = '[Contact] Load Contacts';
export const Load_ContactsSuccess = '[Contact] Load Contacts Success';
export const Load_ContactsFailure = '[Contact] Load Contacts Failure';

// Create Contact
export const createContact = createAction(Create_Contact, props<{ contact: Contact }>());
export const createContactSuccess = createAction(Create_ContactSuccess, props<{ contact: Contact }>());
export const createContactFailure = createAction(Create_ContactFailure, props<{ error: any }>());

// Load Contacts
export const loadContacts = createAction(Load_Contacts);
export const loadContactsSuccess = createAction(Load_ContactsSuccess, props<{ contacts: Contact[] }>());
export const loadContactsFailure = createAction(Load_ContactsFailure, props<{ error: any }>());

// Update Contact
export const updateContact = createAction('[Contact] Update Contact', props<{ contact: Contact }>());
export const updateContactSuccess = createAction('[Contact] Update Contact Success', props<{ contact: Contact }>());
export const updateContactFailure = createAction('[Contact] Update Contact Failure', props<{ error: any }>());

// Delete Contact
export const deleteContact = createAction('[Contact] Delete Contact', props<{ id: number }>());
export const deleteContactSuccess = createAction('[Contact] Delete Contact Success', props<{ id: number }>());
export const deleteContactFailure = createAction('[Contact] Delete Contact Failure', props<{ error: any }>());
