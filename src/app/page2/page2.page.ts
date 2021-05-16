import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../Services/weather.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  monthlyWeatherData:any = [];

  displayedColumns: string[] = ['dayOfWeek', 'temperatureMax', 'temperatureMin','preasure', 'relHumidity', 'rain', 'windSpeed'];
  
  constructor(private weatherService:WeatherService) {}

  ngOnInit(){
    this.weatherService.GetWeatherData().subscribe(
      (result)=>{
        this.monthlyWeatherData = result.data.daily;
      }
    );
  }

}
