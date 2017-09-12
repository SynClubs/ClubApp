import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  slideData = [{ image: "http://p7cdn4static.sharpschool.com/userfiles/servers/server_467729/image/school1.jpg" },
  { image: "https://d1k5w7mbrh6vq5.cloudfront.net/images/cache/18/63/78/18637851482a01cb7f536975cee19242.jpg" },
  { image: "http://p7cdn4static.sharpschool.com/userfiles/servers/server_467729/image/classroom1.jpg" }]

}
