import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactsService } from '../../services/contacts.service';
import * as ContactsActions from '../action/create.action';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ContactsEffects {
  constructor(private actions$: Actions, private contactsService: ContactsService) {}

  // createContact$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ContactsActions.createContact),
  //     mergeMap(({ contact }) =>
  //       this.contactsService.createContact(contact).pipe(
  //         map((createdContact) => {
  //           console.log('API Response:', createdContact);  // Log API response
  //           return ContactsActions.createContactSuccess({ contact: createdContact });
  //         }),
  //         catchError((error) => of(ContactsActions.createContactFailure({ error })))
  //       )
  //     )
  //   )
  // );
  
  createContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActions.createContact),
      map((action) => action),  // Map the action if necessary
      mergeMap(({ contact }) =>
        this.contactsService.createContact(contact).pipe(
          map((createdContact) => {
            console.log('API Response:', createdContact);  // Log API response
            return ContactsActions.createContactSuccess({ contact: createdContact });
          }),
          catchError((error) => {
            console.error('Error:', error);  // Log the error to the console
            return of(ContactsActions.createContactFailure({ error }));  // Return the failure action
          })
        )
      )
    )
  );
  
  

  loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActions.loadContacts),
      mergeMap(() => 
        this.contactsService.getContacts().pipe(
          tap(data => console.log('Fetched Contacts:', data)),  // Log data here
          map(contacts => ContactsActions.loadContactsSuccess({ contacts })),
          catchError(error => {
            console.error('Failed to fetch contacts:', error);
            return of(ContactsActions.loadContactsFailure({ error }));
          })
        )
      )
    )
  );

  updateContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActions.updateContact),
      mergeMap(({ contact }) =>
        this.contactsService.updateContact(contact).pipe(
          map(updatedContact => ContactsActions.updateContactSuccess({ contact: updatedContact })),
          catchError(error => of(ContactsActions.updateContactFailure({ error })))
        )
      )
    )
  );

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActions.deleteContact),
      mergeMap(({ id }) =>
        this.contactsService.deleteContact(id).pipe(
          map(() => ContactsActions.deleteContactSuccess({ id })),
          catchError(error => of(ContactsActions.deleteContactFailure({ error })))
        )
      )
    )
  );
}
