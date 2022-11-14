import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocalDE',
})
export class ToLocalDEPipe implements PipeTransform {
  transform(value: number): string {
    let num = value.toFixed(2);
    return num.replace('.',',');
  }
}
