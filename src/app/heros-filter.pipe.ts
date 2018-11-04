import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from "./hero";

@Pipe({
  name: 'herosFilter'
})
export class HerosFilterPipe implements PipeTransform {

  transform(heros: Hero[], name: string): any {
    console.log("Inside filter with: " + name);
    return heros.filter((hero) => hero.name.includes(name));
  }

}
