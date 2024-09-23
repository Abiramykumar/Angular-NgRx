// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ReactiveFormsModule } from '@angular/forms';


// // Angular material
// import { MatButtonModule } from '@angular/material/button';
// import { ContactsComponent } from './contacts/contacts.component';
// import { NewcontactComponent } from './newcontact/newcontact.component';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatTableModule } from '@angular/material/table';
// import { MatCardModule } from '@angular/material/card';
// import { MatInputModule } from '@angular/material/input';
// import { MatDialogModule } from '@angular/material/dialog';
// import { UpdateDialogComponent } from './dialogs/update-dialog/update-dialog.component';
// import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { HttpClientModule } from '@angular/common/http';
// import { ContactsService } from './services/contacts.service'; // Your ContactsService

// @NgModule({
//   declarations: [
//     AppComponent,
//     ContactsComponent,
//     NewcontactComponent,
//     UpdateDialogComponent,
//     DeleteDialogComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     HttpClientModule,
//     MatButtonModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatSidenavModule,
//     MatTableModule,
//     MatCardModule,
//     ReactiveFormsModule,
//     MatInputModule,
//     MatDialogModule,
//     MatExpansionModule
//   ],
//   providers: [ContactsService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { contactsReducer } from './state/action/reducers/create.reducer';
import { ContactsEffects } from './state/effectors/create.effector';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './newcontact/newcontact.component';

@NgModule({
  
  // declarations: [ContactsComponent, NewContactComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contacts: contactsReducer }),
    EffectsModule.forRoot([ContactsEffects]),
  ],
  // bootstrap: [AppComponent]
})
export class AppModule {}

