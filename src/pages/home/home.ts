import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  weather: any;
  location: {
    country: string,
    city: string
  }


  newicon: string;


  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider, public storage: Storage,
  ) {


  }

  //swipe event allows us to swipe between tabs
  swipe(event) {
    if (event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

  ionViewWillEnter() {

    //checks if there's location information store - if not it displays the default
    this.storage.get('location').then(val => {
      if (val != null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          country: 'Ireland',
          city: 'Tullamore'
        }
      }

      //this displays the api information in the console in the browser
      this.weatherProvider.getWeather(this.location.country, this.location.city)
        .subscribe(weather => {
          this.weather = weather;
          console.log(weather);

          /*   cannot get this switch statement to work - trying to change the icons from the api into my own 
      
          switch(this.newicon) {
                  
        //Daytime icons **************************************
      
        
         case "http://openweathermap.org/img/w/10d.png": { 
          this.newicon = '../../assets/rain.png';
            break; 
         } 
      
         case "http://openweathermap.org/img/w/09d.png": { 
          this.newicon = '../../assets/rain.png';
            break; 
         } 
         case "http://openweathermap.org/img/w/13d.png": { 
          this.newicon = '../../assets/snow.png';
            break; 
         } 
       
         case "http://openweathermap.org/img/w/11d.png": { 
          this.newicon = '../../assets/storm.png';
            break; 
         } 
       
         
         case "http://openweathermap.org/img/w/01d.png": { 
          this.newicon = '../../assets/sun.png';
            break; 
         } 
         
        
         case "http://openweathermap.org/img/w/04d.png": { 
          this.newicon = '../../assets/cloud.png';
            break; 
         } 
      
         case "http://openweathermap.org/img/w/50d.png": { 
          this.newicon = '../../assets/fog.png';
            break; 
         } 
      
      
         case "http://openweathermap.org/img/w/02d.png": { 
          this.newicon = '../../assets/sun_cloud.png';
            break; 
         } 
         case "http://openweathermap.org/img/w/03d.png": { 
          this.newicon = '../../assets/cloud.png';
            break; 
         } 
        
      
         //Night time Icons*************************************
      
       
         case "http://openweathermap.org/img/w/09n.png": { 
          this.newicon = '../../assets/rain.png';
            break; 
         } 
         case "http://openweathermap.org/img/w/13d.png": { 
          this.newicon = '../../assets/sleet.png';
            break; 
         } 
        
         case "http://openweathermap.org/img/w/10n.png": { 
          this.newicon = '../../assets/rain.png';
            break; 
         } 
      
         case "http://openweathermap.org/img/w/13n.png": { 
          this.newicon = '../../assets/snow.png';
            break; 
         } 
       
         case "http://openweathermap.org/img/w/11n.png": { 
          this.newicon = '../../assets/storm.png';
            break; 
         } 
      
         case "http://openweathermap.org/img/w/01n.png": { 
          this.newicon = '../../assets/nt_clear.png';
            break; 
         } 
      
       
         case "http://openweathermap.org/img/w/04n.png": { 
          this.newicon = '../../assets/night_cloud.png';
            break; 
         } 
      
         case "http://openweathermap.org/img/w/50n.png": { 
          this.newicon = '../../assets/fog.png';
            break; 
         } 
      
      
         case "http://openweathermap.org/img/w/03n.png": { 
          this.newicon = '../../assets/night_cloud.png';
            break; 
         } 
         case "http://openweathermap.org/img/w/02n.png": { 
          this.newicon = '../../assets/night_cloud.png';
            break; 
         } 
      
         default: { 
            console.log("Invalid choice"); 
            break;              
          } 
        }
          
      */
        });
    });
  }

}