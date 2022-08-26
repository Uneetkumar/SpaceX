import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/Contact/contact.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  public contacts: any;
  constructor(private service: ContactService) {}
  ngOnInit() {
    this.fetchContacts();
  }

  private fetchContacts() {
    this.service.getData().subscribe(
      response => {
        this.contacts = response;
      }
    );
    console.log(this.contacts,"this is console");
  }
}
