import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {


  //my API key that i got from openweather
  private apikey: string = '7441693e282f0a48b0a03ef2b4626628';
  private url: string = '';
  constructor(public http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  }

  //this function once invoked will add the country and city along with the information from above and parse it together
  getWeather(country, city) {
    return this.http.get(this.url + city + ',' + country + '&units=metric&APPID=' + this.apikey).map((res: Response) => 
    res).catch((error: any) => Observable.throw(error.error + 'Server error'));
  }

}

