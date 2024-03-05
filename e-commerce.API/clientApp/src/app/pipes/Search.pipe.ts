import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    return products.filter((product) => product.name.includes(searchTerm));
  }

}
