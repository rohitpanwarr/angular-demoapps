import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(text: string, limit: number): unknown {

    if (text.length > limit) {
      text = text.split(' ', limit).join(' ') + '...';
    }

    return text;
  }

}
