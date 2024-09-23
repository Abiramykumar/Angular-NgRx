import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Contact } from '../interfaces/contact';
import { environmentapi } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiUrl = environmentapi.URL;  // Replace with your actual backend URL

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl+'Test');

  }


  // Create a new contact
  createContact(newContact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl +'Test', newContact);
  }

  // Update a contact
  updateContact(updatedContact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${updatedContact.Id}`, updatedContact);
  }

  // Delete a contact
  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
