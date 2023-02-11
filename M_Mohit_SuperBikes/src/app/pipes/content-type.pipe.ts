import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentType'
})
export class ContentTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
