import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toupper',
  standalone: true,
  pure:true
})
export class MycustompipePipe implements PipeTransform {

  transform(value: string ){
    // write logic to implement
    return value.toUpperCase();

  }

}
