import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatWorkHours',
})
export class FormatWorkHoursPipe implements PipeTransform {
  transform(value: number): string {
    return 0 <= value && value < 10 ? '0' + value : String(value);
  }
}
