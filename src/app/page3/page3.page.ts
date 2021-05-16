import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../Services/weather.service';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  monthlyWeatherData:any = [];

  displayedColumns: string[] = ['time', 'type', 'temperatureMax', 'temperatureMin', 'cloudCover', 'rain', 'windSpeed'];
  
  constructor(private weatherService:WeatherService) {}

  ngOnInit(){
    this.weatherService.GetWeatherData().subscribe(
      (result)=>{
        this.monthlyWeatherData = result.data.hourly;
      }
    );
  }

}
