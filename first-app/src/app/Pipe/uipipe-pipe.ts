import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uIPipe',
})
export class UIPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
