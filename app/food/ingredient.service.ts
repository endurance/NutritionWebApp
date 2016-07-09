import { Injectable } from 'angular2/core';
import { Ingedient } from './food';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable'; 


@Injectable()
export class IngredientService {
    private _ingredientUrl = 'api/foods/ingredients.json';
    
    constructor(private _http: Http) { }
    
    public getIngredients(): Observable<Ingedient[]> {
        return this._http.get(this._ingredientUrl
)
        .map( (response: Response) => <Ingedient[]>response.json() )
        .do( data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}