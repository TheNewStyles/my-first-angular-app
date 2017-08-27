import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'Ford',
    'Chevy',
    'Buick'
  ];

  myData() {
    return 'return this string from myData service';
  }

}
