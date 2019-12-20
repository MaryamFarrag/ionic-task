import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  data:any = [];
  title:string = "";
  img: String = "";
  price = String;
  weight = String;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories/'+this.navParams.data.catId+'').subscribe((response) => {
      this.data = response;
      this.data = this.data.products.find(product=>product.id === this.navParams.data.id)
      this.title = this.data.name
      this.img = this.data.product_img
      this.weight = this.data.weight
      this.price = this.data.price
      console.log(this.data)
      });
  }

  ionViewDidLoad() {
    
  }

}
