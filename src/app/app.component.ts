import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',

  template: `<h1 [class]="titleClass">Hey guys</h1>
            <h1 [ngClass]="titleClasses">{{ title }}</h1>
            <h1 [ngStyle]="titleStyle">New</h1>
            <h1 [style.color]="pink">New</h1>
            <p>{{ someProperty }}</p>

            <button [disabled]="buttonStatus == 'enabled'">{{test}}</button>
            <button (click)="myEvent($event)">My button</button>
            <button [@myAwesomeAnimation]='state' (click)="animateMe()">Animate</button>
            `,

  //styleUrls: ['./app.component.css']

  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small <=> large', animate('300ms ease-in',
          keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
          ])
        // style({
        //   transform:  'translateY(40px)'
        // })
      )),
    ]),
  ],

  styles: [`
    .red-title {
      color: red;
    }
    .large-title {
      font-size: 4em;
    }
  `],

})

export class AppComponent {

state: string = 'small';

animateMe() {
  this.state = (this.state === 'small' ? 'large' : 'small');
}

constructor(private dataService:DataService) {

}

someProperty:string = '';

ngOnInit() {
  console.log(this.dataService.cars);

  this.someProperty = this.dataService.myData();
}

  buttonStatus = 'enabled';
  test = 'test this is weird';
  titleClass="red";
  title = 'cool';
  pink = 'pink';

  titleClasses = {
    'red-title': true,
    'large-title': true
  }

  titleStyle = {
    'color' : 'green',
    'font-size' : '12px' 
  }

  myEvent(event){
    console.log(event);
  }

}
