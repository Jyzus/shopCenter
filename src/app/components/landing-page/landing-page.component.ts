import { Component, OnInit } from '@angular/core';
import { Category, IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

interface CategoryActive {
  category: Category;
  active: boolean;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private __productService: ProductsService) {}

  // Declaración de variables

  categories: CategoryActive[] = [];
  productLoader: boolean = false;

  productsList: IProduct[] = [];
  productsFilter: IProduct[] = [];
  productsSearch: IProduct[] = [];

  searchValue: string = '';

  minPrice: number = 0;
  maxPrice: number = 1000;

  // Funciones de filtro

  getProductsForCategory(categoryId: Category) {
    this.productLoader = false;
    this.searchValue = '';
    this.__productService.getProductsForCategory(categoryId).subscribe({
      next: (data: any) => {
        this.productsFilter = data;
        this.productsSearch = [...this.productsFilter];
      },
      complete: () => {
        this.productLoader = true;
      },
    });
  }

  searchProduct() {
    const searcher = this.productsSearch.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(this.searchValue.toLocaleLowerCase())
    );
    this.productsFilter = searcher;
  }

  filterByPrice() {
    this.productsFilter = this.productsSearch.filter((item) => {
      const meetsMinCriteria =
        this.minPrice === undefined || item.price >= this.minPrice;
      const meetsMaxCriteria =
        this.maxPrice === undefined || item.price <= this.maxPrice;
      return meetsMinCriteria && meetsMaxCriteria;
    });
  }

  resetFilters() {
    this.minPrice = 0;
    this.maxPrice = 1000;

    this.productsFilter = this.productsList;
    this.searchValue = '';
  }

  // Peticiones

  ngOnInit(): void {
    this.__productService.getCategories().subscribe({
      next: (data: any) => {
        for (let category of data) {
          this.categories.push({ category, active: false });
        }
      },
    });

    this.__productService.getProducts().subscribe({
      next: (data: any) => {
        this.productsList = data;
        this.productsFilter = [...this.productsList];
        this.productsSearch = [...this.productsList];
      },
      complete: () => {
        this.productLoader = true;
      },
    });
  }
}
