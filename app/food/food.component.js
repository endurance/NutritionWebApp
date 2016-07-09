System.register(['angular2/core', 'angular2/router', './ingredient.service', 'listjs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ingredient_service_1;
    var FoodComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ingredient_service_1_1) {
                ingredient_service_1 = ingredient_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            FoodComponent = (function () {
                function FoodComponent(_ingredientService) {
                    this._ingredientService = _ingredientService;
                    this.pageTitle = "Foods";
                    var options = {
                        valueNames: ['Name', 'Calories']
                    };
                    var userList = new List('foods', options);
                }
                FoodComponent.prototype.ngAfterContentInit = function () {
                };
                FoodComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._ingredientService.getIngredients()
                        .subscribe(function (ingredients) { return _this.ingredients = ingredients; }, function (error) { return _this.errorMessage = error; });
                };
                FoodComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/food/food.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [ingredient_service_1.IngredientService])
                ], FoodComponent);
                return FoodComponent;
            }());
            exports_1("FoodComponent", FoodComponent);
        }
    }
});
//# sourceMappingURL=food.component.js.map