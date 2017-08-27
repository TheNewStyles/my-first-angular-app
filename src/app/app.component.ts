import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',

  template: `<h1 [class]="titleClass">Hey guys</h1>

            <button [disabled]="buttonStatus == 'enabled'">{{test}}</button>
            <button (click)="myEvent($event)">My button</button>
            `,

  //styleUrls: ['./app.component.css']

  styles: [`
    .red {
      color: red;
    }
  `]
})

export class AppComponent {
  buttonStatus = 'enabled';
  test= 'test this is weird';
  titleClass="red";

  myEvent(event){
    console.log(event);
  }

}
