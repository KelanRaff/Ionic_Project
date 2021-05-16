import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  GetWeatherData():Observable<any>{
   return this.httpClient.get('https://api.troposphere.io/forecast/53.2626,-9.0704?token=b28ea1c7e4fac92293fa1d47c36a17241bbf4487fd0a170147');
  }
}
