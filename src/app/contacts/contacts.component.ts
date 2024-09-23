import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';
import * as ContactsActions from '../state/action/create.action';
import { selectAllContacts } from '../state/action/selectors/create.selector';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../dialogs/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [MatTableModule, MatDialogModule]  // Import MatTableModule
})
export class ContactsComponent implements OnInit {
  contact$: Observable<Contact[]> = this.store.select(selectAllContacts);//removed s from contacts
  dataSource = new MatTableDataSource<Contact>();
  columnsToDisplay = ['Name', 'Email', 'PhoneNumber', 'Address', 'Update', 'Delete'];
  

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit() {
    this.store.dispatch(ContactsActions.loadContacts()); //
    // console.log(ContactsActions);
    this.contact$.subscribe(contact => {
      this.dataSource.data = contact;
      console.log(contact);
    });
    
  }

  onUpdate(contact: Contact) {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(ContactsActions.updateContact({ contact: result }));  //removed s from contacts
      }
    });
  }

  onDelete(contact: Contact) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(ContactsActions.deleteContact({ id: contact.Id }));
      }
    });
  }
}
