import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CategoryPage } from '../category/category';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  data:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories').subscribe((response) => {
    this.data = response;
    console.log(this.data)
    });
  }
  goToCategory(id){
    console.log("sth",id)
    this.navCtrl.push(CategoryPage,{
      id:id
    })
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }

}
