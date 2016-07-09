import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http'
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router'
import 'rxjs/Rx'; // Load all features

import { WelcomeComponent } from './home/welcome.component'
import { FoodComponent } from './food/food.component'
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { IngredientService } from './food/ingredient.service';
import { ProductDetailComponent } from './products/product-detail.component' 

// Decorator - like an attribute
@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.layout.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [IngredientService, ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/food', name: 'Food', component: FoodComponent},
    {path: '/products', name: 'Products', component: ProductListComponent},
    {path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent}
])
export class AppComponent {
    pageTitle: string = 'Nutrition Tracker';
}
