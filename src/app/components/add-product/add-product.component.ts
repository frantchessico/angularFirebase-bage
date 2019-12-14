import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  myProduct = {
    title: '',
    price: 0,
    stock: 0,
    active: false,
    category: {}
  }

  categories = [{id: 1, label: "Electronic"}, {id: 2, label: "cars"}];

  constructor(
     private productService: ProductService, 
     private router: Router) { }

  ngOnInit() {
  }

  saveProduct(form) {

    if(form.valid) {
      this.productService.save(this.myProduct)
      .then(res => this.router.navigate(['/products']))
      .catch(err => console.log('message erreur: ', err))
    }
   
  }

  log(data) {
    console.log(data)
  }

}
