import { Component } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

// no selector due to no nested component-ness
@Component({
    templateUrl:  'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail"
    
    constructor(private _routeParams: RouteParams, private _router: Router)
    {
        let id = +this._routeParams.get('id');
        this.pageTitle += ` : ${id}`;
    }
    
    onBack(): void {
        this._router.navigate(['Products'])
    }
}