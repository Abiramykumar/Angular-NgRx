// main.ts
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from '../src/app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';  // Import routes with a distinct name
import { provideStore } from '@ngrx/store';
import { contactsReducer } from '../src/app/state/action/reducers/create.reducer';
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideStore({ contacts: contactsReducer }),
    importProvidersFrom(MatDialogModule)
]
})
.catch(err => console.error(err));



