import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable()
export class ContactService {

_contactList: Contact[] =[]

  constructor() { }

addContact(contact: Contact) {
  this._contactList.push(contact);

}
removeContact(id: number) {
  const contact = this._contactList.findIndex(c  => c.ID === id);
  this._contactList.splice(contact, 1);
} 
getAllContacts(){
  return this._contactList;
}
}
