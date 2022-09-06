import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../model/product/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://31.220.111.221:5000/';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any>{
    return this.http.get(this.url + 'getProduct');
  }
}
