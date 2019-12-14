import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  myProduct = {
    title: '',
    price: 0,
    stock: 0,
    active: false,
    category: {}
  }

  categories = [{id: 1, label: "Electronic"}, {id: 2, label: "cars"}];

  id: string = "";
  constructor(
     private productService: ProductService,
     private route: ActivatedRoute,
     private router: Router
     ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getOneProduct();
  }

  getOneProduct() {
    this.productService.getOne(this.id)
                       .subscribe((res: any) => this.myProduct = res)
  }

  updateProduct() {
    this.productService.update(this.id, this.myProduct)
                       .then(res => this.router.navigate(['/products']))
                       .catch(err => console.log(err))
  }

}
