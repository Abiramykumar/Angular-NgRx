import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { MatTableModule } from '@angular/material/table'; // Ensure this import
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [], // Declare your component
  imports: [
    CommonModule,
    MatTableModule, // Add MatTableModule to imports
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
})
export class ContactsModule { }
