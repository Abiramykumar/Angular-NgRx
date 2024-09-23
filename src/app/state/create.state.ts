import { Contact } from '../interfaces/contact'; // Make sure the path to the Contact interface is correct

// Define the state interface
export interface ContactsState {
  contacts: Contact[]; // Array to hold the list of contacts
  error: string | null; // Error message in case something goes wrong
}

// Define the initial state
export const initialState: ContactsState = {
  contacts: [], // Start with an empty array of contacts
  error: null,  // No error initially
};
