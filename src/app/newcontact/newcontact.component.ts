// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ContactsService } from '../services/contacts.service';
// import { Contact } from '../interfaces/contact';

// @Component({
//   selector: 'app-newcontact',
//   templateUrl: './newcontact.component.html',
//   styleUrls: ['./newcontact.component.scss']
// })
// export class NewcontactComponent {

//   newContact!: Contact;

//   contactForm = new FormGroup({
//     name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
//     email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
//     phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
//     address: new FormControl('', [Validators.required, Validators.maxLength(200)]),
//   });

//   constructor(private router: Router, private contactsService: ContactsService) { }

//   onSubmit() {

//     this.newContact = {
//       id: 0,
//       name: this.contactForm.controls['name'].value as string,
//       email: this.contactForm.controls['email'].value as string,
//       phoneNumber: this.contactForm.controls['phoneNumber'].value as string,
//       address: this.contactForm.controls['address'].value as string
//     };

//     this.contactsService.createContact(this.newContact);

//     console.log(this.contactsService.getContacts());

//     this.router.navigate(['/contacts']);
//   }

//   onCancel() {
//     this.router.navigate(['/contacts']);
//   }
// }
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store'; 
import * as ContactsActions from '../state/action/create.action';  // import the actions
import { Contact } from '../interfaces/contact'; // Import your Contact interface

@Component({
  standalone: true,
  selector: 'app-newcontact',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule],
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss'],
})
export class NewContactComponent {
  contactForm: FormGroup;

  constructor(private store: Store) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });
  
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        Id: this.contactForm.value.Id,  // Replace this if your backend generates the ID
        Name: this.contactForm.value.name,
        Email: this.contactForm.value.email,
        PhoneNumber: this.contactForm.value.phoneNumber,
        Address: this.contactForm.value.address
      };

      // Dispatch the action and pass the contact as a payload
      this.store.dispatch(ContactsActions.createContact({ contact: newContact }));

      console.log('Form Submitted', newContact);
      this.contactForm.reset();  // Optionally reset the form
    }
    // this.router.navigate(['/contacts']);
  }

  onCancel() {
    this.contactForm.reset();
  }
}
