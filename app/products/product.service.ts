import { Injectable } from 'angular2/core';
import { Product } from './product';
import { Http, Response } from 'angular2/http';
import {Observable } from 'rxjs/Observable'; 


@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';
    
    constructor(private _http: Http) { }
    
    public getProducts(): Observable<Product[]> {
        return this._http.get(this._productUrl)
        .map( (response: Response) => <Product[]>response.json() )
        .do( data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}