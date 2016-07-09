
import { Component, OnInit, AfterContentInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Ingredient } from './food';
import { IngredientService } from './ingredient.service';
import 'listjs'

@Component({
    templateUrl: 'app/food/food.component.html',
    directives: [ROUTER_DIRECTIVES],
})
export class FoodComponent implements OnInit, AfterContentInit {
    public pageTitle: string = "Foods";

    ingredients: Ingredient[];
    errorMessage: string;
    constructor(private _ingredientService: IngredientService){
        var options = {
            valueNames: [ 'Name', 'Calories' ]
        };
        var userList = new List('foods', options)
     }

    ngAfterContentInit(): void {

    }
    ngOnInit(): void {
        this._ingredientService.getIngredients()
            .subscribe(ingredients => this.ingredients = ingredients,
                       error => this.errorMessage = <any>error);

    }
}