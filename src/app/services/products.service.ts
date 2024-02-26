import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseURL: string = 'https://fakestoreapi.com/products';
  constructor(private _httpClient: HttpClient) {}

  public getProducts(): Observable<IProduct> {
    return this._httpClient.get<IProduct>(this.baseURL);
  }

  public getProductsById(id: string): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getCategories(): Observable<Category> {
    return this._httpClient.get<Category>(`${this.baseURL}/categories`);
  }

  public getProductsForCategory(category: Category): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(
      `${this.baseURL}/category/${category}`
    );
  }
}
