import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultItems = [];
    
      for(const item of value ){
      let filterType = item.name?'name':'title';
      if(item[filterType].toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultItems.push(item);
      }
    }
    return resultItems;
  }

}
