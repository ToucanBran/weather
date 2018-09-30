import { Component, Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';
import { WeatherForecast } from '../models/weather-forecast';
import { CityDetails } from '../models/city-details';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent {
  @Input()
  searchText: string;
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  cityDetails: CityDetails;
  errorMessage: string;
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
  }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;

    this.http.get(this.weatherBitUrl).subscribe(result => {
      this.errorMessage = null;
      if (!result) {
        this.displayError();
        return;
      }
      this.cityDetails = new CityDetails(result['city_name'], result['state_code']);
      this.weatherForecasts = result['data'].map((weatherForecast) => {
        const forecast = new WeatherForecast();
        Object.assign(forecast, weatherForecast);
        return forecast;
      });
    },
      err => {
        this.displayError();
      });
  }

  displayError() {
    this.errorMessage = 'Hmmm... looks like there\'s no data for that city.';
  }
}
