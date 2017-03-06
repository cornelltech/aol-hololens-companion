import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
              private af: AngularFire) {
    this.items = af.database.list('/');
  }

}
