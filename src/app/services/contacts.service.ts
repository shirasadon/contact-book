import { Injectable } from '@angular/core';
import { Contact } from '../contact/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
contact:Contact[]
  constructor() {
    this.contact=[
      {
        name:"shira",
        phon:"050505050"
      },
      {
        name:"aff",
        phon:"050505050"
      },
      {
        name:"fgfgfg",
        phon:"050505050"
      },
      {
        name:"vvvvv",
        phon:"050505050"
      },
    ]
   }
   getcontacts(){
     return this.contact
   }
}
