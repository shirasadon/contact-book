import { Component, OnInit,Input } from '@angular/core';
import { Contact } from './contact';
import { ContactsService } from '../services/contacts.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact?:Contact
  constructor(private ContactsService:ContactsService) { }

  ngOnInit(): void {
  }

}
