import { Component, OnInit } from '@angular/core';
import { cleanSession } from 'selenium-webdriver/safari';
import { clearScreenDown } from 'readline';

@Component({
  selector: 'app-test',
  template: `
  <h2> Welcome <i>{{name}}</i>! </h2>
  <input [(ngModel)]="name" type= "text">
  {{name}}
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})




export class TestComponent implements OnInit {

  public name = '';
  public greeting = '';
  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
    console.log(value);
  }

}
