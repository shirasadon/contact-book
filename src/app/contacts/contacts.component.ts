import { Component, OnInit,Input } from '@angular/core';
import { Contact } from '../contact/contact';
import { ContactsService } from '../services/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
@Input() contacts:Contact[]

  constructor( private service:ContactsService) {
    this.contacts=[]
     this.contacts=this.service.getcontacts()
   }

  ngOnInit(): void {
  }

}
