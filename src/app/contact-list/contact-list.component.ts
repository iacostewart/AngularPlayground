import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactService } from '../service/contact.service';
import { ContactComponent } from '../../app/contact/contact.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  isPopupOpened = false;

  constructor( private dialog?: MatDialog,
  private _contactService?: ContactService) {}

  ngOnInit() {
  }

get ContactList() {
  return this._contactService.getAllContacts();

}

addContact() {
  this.isPopupOpened = true;
  const dialogRef = this.dialog.open(ContactComponent , {
    data: {}
  });


dialogRef.afterClosed().subscribe(result => {
  this.isPopupOpened = false;  
});
}
}
