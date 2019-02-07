import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public loginForm: any;
  messageEmail = ""
  errorEmail = false;


  geoposition: Geoposition;


  constructor(public navCtrl: NavController, formBuilder: FormBuilder, private alertCtrl: AlertController, public navParams: NavParams, private platform: Platform, private geolocation: Geolocation) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.required],

    });
  }


  //code to get the geolocation plugin set up
  async getGeolocation() {
    await this.platform.ready();

    try {
      this.geoposition = await this.geolocation.getCurrentPosition()
    }
    catch (e) {
      console.error(e);
    }
  }


  login() {
    let { email } = this.loginForm.controls;

    if (!this.loginForm.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Oops! Invalid Email!";
      } else {
        this.messageEmail = "";
      }
    } else {
      let alert = this.alertCtrl.create({
        title: 'Confirm Email',
        message: 'Do you agree to receive email alerts from us?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
              this.messageEmail ="Sign up successful";
            }
          }
        ]
      });
      alert.present();
    }
  }


  swipe(event) {
    if (event.direction === 2) {
      this.navCtrl.parent.select(2);
    }
    if (event.direction === 4) {
      this.navCtrl.parent.select(0);
    }
  }



}






