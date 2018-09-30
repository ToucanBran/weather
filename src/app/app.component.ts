import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchText: string;
  displayInitial = true;
  @ViewChild('forecastList') forecastList;

  constructor() { }

  submit() {
    this.displayInitial = false;
    this.forecastList.getWeather();
  }

  containerClasses() {
    if (this.displayInitial) {
      return ['container', 'd-flex', 'justify-content-center', 'align-items-center'];
    }
    else {
      return ['container'];
    }
  }

}
