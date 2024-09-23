// import { Component } from '@angular/core';
// // import { MatToolbarModule } from '@angular/material/toolbar';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   // standalone: false,
//   // imports: [MatToolbarModule]

// })
// export class AppComponent {
//   title = 'AddressBookAngular';
// }


// import { Component } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon';  // Import MatIconModule
// import { MatSidenavModule } from '@angular/material/sidenav';  // Import MatSidenavModule if needed
// import { MatToolbarModule } from '@angular/material/toolbar';  // Import MatToolbarModule if needed
// import { RouterModule } from '@angular/router';  // Import RouterModule if you're using routing

// @Component({
//   standalone: true,
//   imports: [MatIconModule, MatSidenavModule, MatToolbarModule, RouterModule],  // Include MatIconModule here
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'AddressBookAngular';
// }


// app.component.ts
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatButtonModule } from '@angular/material/button';
// import { MatTableModule } from '@angular/material/table';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   imports: [
//     RouterOutlet,
//     MatToolbarModule,
//     MatIconModule,
//     MatSidenavModule,
//     MatButtonModule,
//     MatTableModule
//   ]  // Import necessary Angular Material modules
// })
// export class AppComponent {
//   title = 'AddressBookAngular';
// }

import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'; // Import MatTabsModule
import { Router, RouterModule } from '@angular/router'; // For routing functionality
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './newcontact/newcontact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule,   // Include MatTabsModule here
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    ContactsComponent, 
    NewContactComponent
  ]
})
export class AppComponent {
  title = 'Address Book';
}


