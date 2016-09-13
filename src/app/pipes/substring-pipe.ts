/**
 * Created by jlhuerta on 9/12/16.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'subStringCustom'})
export class SubstringPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if(!value){
      return;
    }
    if(value.length > length) {
      return value.substr(0, length)+"...";
    } else {
      return value+"...";
    }
  }
}
