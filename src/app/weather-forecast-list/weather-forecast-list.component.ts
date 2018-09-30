import { Component, OnInit, Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';
import { WeatherForecast } from '../models/weather-forecast';
import { CityDetails } from '../models/city-details';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  @Input()
  searchText: string;
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  cityDetails: CityDetails;
  
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
  }

  getWeather() {
    // this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    this.weatherBitUrl = `${weatherBit.urlBase}?city=Raleigh,NC&key=${weatherBit.apiKey}`;
    this.http.get(this.weatherBitUrl).subscribe(result => {
      if (result['city_name'] && result['state_code']) {
        this.cityDetails = new CityDetails(result['city_name'], result['state_code']);
      }
      if (result['data']) {
        this.weatherForecasts = result['data'].map((weatherForecast) => {
          const forecast = new WeatherForecast();
          Object.assign(forecast, weatherForecast);
          return forecast;
        });
      }
    });
  }

  ngOnInit() {
    this.getWeather();
  }

}
