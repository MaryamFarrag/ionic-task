import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProductPage } from '../product/product';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  data:any = [];
  title:string = "";
  img: String = "";
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories/'+this.navParams.data.id+'').subscribe((response) => {
    this.data = response;
    this.title = this.data.name
    this.img = this.data.category_img
    this.data = this.data.products
    console.log(this.data)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage',this.navParams.data.id);
  }
  goToProduct(id){
    console.log(id)
    this.navCtrl.push(ProductPage,{
      id:id,
      catId:this.navParams.data.id
    })
  }

}
