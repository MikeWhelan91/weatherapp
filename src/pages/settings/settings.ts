import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';





@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  


  country: string;
  city: string;

  constructor( public navCtrl: NavController, private storage: Storage, ) {
    //checks the storage for the value - if none, displays the default
    this.storage.get('location').then((res) => {
      if (res != null) {
        let location = JSON.parse(res);
        this.city = location.city;
        this.country = location.country;
      } else {
        this.city = 'Tullamore';
        this.country = 'Ireland';
      }
    });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  //the function takes the city and country and sets it as the location 
  saveForm() {
    let location = {
      city: this.city,
      country: this.country

    }
    this.storage.set('location', JSON.stringify(location));
    //this brings you to the homepage if the location was successfully changed
    this.navCtrl.push(HomePage);
  }

  //swipe event to move left and right between tabs
  swipe(event) {
    if (event.direction === 4) {
      this.navCtrl.parent.select(1);
    }
  }
}
