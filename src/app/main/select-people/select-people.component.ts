import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-select-people',
  templateUrl: './select-people.component.html',
  styleUrls: ['./select-people.component.scss']
})
export class SelectPeopleComponent implements OnInit {

  products: Product[];

  product: Product;

  selectedProducts: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().then(data => this.products = data);
  }

}
