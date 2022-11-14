import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundTo',
})
export class RoundToPipe implements PipeTransform {
  transform(num: number, places: number = 2): number {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  }
}
