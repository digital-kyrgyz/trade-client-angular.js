import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(
      data => console.log(data));

    // this.httpClientService.put({
    //   controller: "products",
    // }, {
    //   id: "ef064cbe-4af2-45d1-80ab-a60cbe45418b",
    //   name: "Melistin kagazi 2",
    //   stock: 2300
    // }).subscribe();
    // this.httpClientService.post({
    //   controller: "products"
    // }, {F
    //   name: "Pencil",
    //   stock: 100,
    //   price: 30
    // }).subscribe();
    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Pencil 2",
    //   stock: 100,
    //   price: 30
    // }).subscribe();
    // this.httpClientService.delete({
    //   controller: "products"
    // }, "0f9b5d4e-4ece-4172-9593-0e225b32c242").subscribe();
    // this.httpClientService.get({
    //   fullEndpoint: "https://jsonplaceholder.typicode.com/posts",
    // }).subscribe(data => console.log(data));
  }
}
