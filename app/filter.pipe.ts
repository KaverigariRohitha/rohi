import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(value: string[],searchText:string, ...args: unknown[]): string[] {
    if(!value || !searchText)
    {
      return value;
    }
   searchText=searchText.toLowerCase();
   return value.filter(value => value.toLowerCase().includes(searchText)); 
  }

}
