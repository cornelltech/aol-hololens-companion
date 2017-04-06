import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { OnInit }               from '@angular/core';
import { Http, Headers }        from '@angular/http';
import { Observable }           from 'rxjs/Observable';

import { Component } from '@angular/core';


import { NavController } from 'ionic-angular';


export interface DataObj {
  id: number;
  product: string;
  selected: boolean;
}

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  API_ROUTE:string = 'http://ec2-52-3-223-71.compute-1.amazonaws.com:5000';
  items: Observable<DataObj[]>;

  constructor(public navCtrl: NavController,
              private http: Http,) { }

  ngOnInit(){
    this.items = this.fetchData();
  }

  onClick(event:any, item) {
    this.items.subscribe((objs) => {
      objs.map((obj) => {
        if( obj.id === item.id) obj.selected = !obj.selected
      });
      this.pushData(objs).subscribe((r) => {});
    })
  }

  fetchData():Observable<DataObj[]> {
    return this.http.get(`${this.API_ROUTE}/ping`)
                    .map(res => res.json())
                    .map(data => data["results"]);
  }
  pushData(data:DataObj[]):Observable<DataObj[]> {
    return this.http.put(`${this.API_ROUTE}/ping`, data)
                    .map(res => res.json());
  }

}
