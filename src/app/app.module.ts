import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIconModule  } from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule } from '@angular/material/card';
import { ContactService } from '../app/service/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesService } from './services/notes.service';
import { NoteIndexComponent } from './components/note/note-index/note-index.component';
import { NoteCreateComponent } from './components/note/note-create/note-create.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';
import { NoteDeleteComponent } from './components/note/note-delete/note-delete.component';
import { SlidertestComponent } from '../../src/app/components/slidertest/slidertest.component';
import { ContactComponent } from './contact/contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
// import { AuthGuard } from '../../../StartingRedirect/src/app/guards/auth.guard'



const routes = [
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'notes', children: [
      { path: '', component: NoteIndexComponent },
      { path: 'create', component: NoteCreateComponent },
      { path: 'detail/:id', component: NoteDetailComponent },
      { path: 'edit/:id', component: NoteEditComponent },
      { path: 'delete/:id', component: NoteDeleteComponent}
  ]
  },
  { path: '**', component: RegistrationComponent},
  { path: 'slider', component: SlidertestComponent}
 
 ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    NoteIndexComponent,
    NoteCreateComponent,
    NoteDetailComponent,
    NoteEditComponent,
    NoteDeleteComponent,
    SlidertestComponent
   
   
 

    
  ],
  imports: [ 
    RouterModule.forRoot(routes),
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,

    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,

    
   
  ],
  providers: [
    AuthService,
    NotesService,
    ContactService,
    
  ],
  entryComponents: [ContactComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
