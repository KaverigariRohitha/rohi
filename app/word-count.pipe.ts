import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount',
  standalone: false
})
export class WordCountPipe implements PipeTransform {

  transform(value: string, ...args: number[]): number {
    return value.trim().split(/\s+/).length;
  }

}
