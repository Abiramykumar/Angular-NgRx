// import { Component, Inject } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { Contact } from 'src/app/interfaces/contact';
// import { ContactsService } from 'src/app/services/contacts.service';

// @Component({
//   selector: 'app-delete-dialog',
//   templateUrl: './delete-dialog.component.html',
//   styleUrls: ['./delete-dialog.component.scss']
// })
// export class DeleteDialogComponent {

//   contactToDelete!: Contact;

//   deleteForm = new FormGroup({
//     name: new FormControl({ value: '', disabled: true }),
//     email: new FormControl({ value: '', disabled: true }),
//     phoneNumber: new FormControl({ value: '', disabled: true }),
//     address: new FormControl({ value: '', disabled: true }),
//   });

//   constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Contact, private contactService: ContactsService) {
//     this.contactToDelete = data;
//   }

//   ngOnInit() {
//     this.deleteForm.controls['name'].setValue(this.contactToDelete.name);
//     this.deleteForm.controls['email'].setValue(this.contactToDelete.email);
//     this.deleteForm.controls['phoneNumber'].setValue(this.contactToDelete.phoneNumber);
//     this.deleteForm.controls['address'].setValue(this.contactToDelete.address);
//   }

//   onSubmit() {

//     let contactId = this.contactToDelete.id;
//     this.contactService.deleteContact(contactId);

//     this.dialogRef.close();
//   }

// }
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  standalone: true,  // Standalone component declaration
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule]  // Import necessary modules
})
export class DeleteDialogComponent {

  contactToDelete!: Contact;

  deleteForm = new FormGroup({
    name: new FormControl({ value: '', disabled: true }),
    email: new FormControl({ value: '', disabled: true }),
    phoneNumber: new FormControl({ value: '', disabled: true }),
    address: new FormControl({ value: '', disabled: true }),
  });

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Contact, private contactService: ContactsService) {
    this.contactToDelete = data;
  }

  ngOnInit() {
    this.deleteForm.controls['name'].setValue(this.contactToDelete.Name);
    this.deleteForm.controls['email'].setValue(this.contactToDelete.Email);
    this.deleteForm.controls['phoneNumber'].setValue(this.contactToDelete.PhoneNumber);
    this.deleteForm.controls['address'].setValue(this.contactToDelete.Address);
  }

  onSubmit() {
    let contactId = this.contactToDelete.Id;
    this.contactService.deleteContact(contactId);
    this.dialogRef.close();
  }
}
