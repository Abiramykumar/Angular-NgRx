// app.routes.ts
import { Route } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './newcontact/newcontact.component';

export const appRoutes: Route[] = [
  { path: '', component: ContactsComponent },  // Default route
  { path: 'contacts', component: ContactsComponent },  // Explicit route
  { path: 'newcontact', component: NewContactComponent },
  { path: '**', redirectTo: '' }  // Wildcard route for unknown paths
];

