import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../Services/weather.service';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myAge:string;
  monthlyWeatherData:any = [];
  lat:any;
  long:any;
  
  constructor(private weatherService:WeatherService, private storage:Storage, private geolocation:Geolocation) {}

  ngOnInit(){
    this.storage.get('age')
    .then((data)=>{
      this.myAge = data;
    })
    .catch()
    this.weatherService.GetWeatherData().subscribe(
      (result)=>{
        this.monthlyWeatherData = result.data.daily;
      }
    );

  }

  GPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
