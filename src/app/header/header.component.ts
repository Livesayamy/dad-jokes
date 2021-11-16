import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  jokeapiservice: any;

  constructor() { }

  ngOnInit(): void {
  }

  onGetJoke() {
    this.jokeapiservice
  }
}
