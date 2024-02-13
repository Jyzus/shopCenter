import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/product.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  categories: Category[] = [];

  constructor(private __productService: ProductsService) {}

  ngOnInit(): void {
    this.__productService.getCategories();
  }
}
