import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { Category, IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _productService: ProductsService
  ) {}

  product?: IProduct;
  categorie?: Category;
  similarProducts: IProduct[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this._productService.getProductsById(params['productId']).subscribe({
        next: (product: IProduct) => {
          this.product = product;
          this._productService
            .getProductsForCategory(this.product.category)
            .subscribe({
              next: (similarProducts: IProduct[]) => {
                const filterProducts = similarProducts.filter(
                  (similarProduct) => similarProduct.id !== product.id
                );
                this.similarProducts = filterProducts;
              },
            });
        },
      });
    });
  }
}
