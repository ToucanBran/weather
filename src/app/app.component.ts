import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchText: string;
  @ViewChild('forecastList') forecastList;

  constructor() {}

  submit() {
    this.forecastList.getWeather();
  }
}
