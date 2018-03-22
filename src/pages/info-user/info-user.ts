import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-user',
  templateUrl: 'info-user.html',
})
export class InfoUserPage {
 'user': {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoUserPage');
  }

}
