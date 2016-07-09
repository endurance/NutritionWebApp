import { PipeTransform, Pipe } from 'angular2/core';
import { Product } from './product';
@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    
    transform(value: Product[], args: string[]) : Product[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase(): null;
        return filter ? value.filter((product: Product) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}