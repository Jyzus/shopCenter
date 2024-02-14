import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private __productService: ProductsService) {}
  categories: Category[] = [];

  ngOnInit(): void {
    this.__productService.getCategories().subscribe({
      next: (data: any) => {
        this.categories = data;
      },
    });
    // console.log(this.categories);
  }
}
