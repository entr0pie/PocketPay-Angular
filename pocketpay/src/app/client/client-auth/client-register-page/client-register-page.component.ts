import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-client-register-page',
  templateUrl: './client-register-page.component.html',
  styleUrls: ['./client-register-page.component.scss']
})
export class ClientRegisterPageComponent {

  constructor(private title: Title) {
    this.title.setTitle('Create a Personal Account | PocketPay')
  }

}
