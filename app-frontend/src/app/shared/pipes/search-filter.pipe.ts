import { Pipe, PipeTransform } from '@angular/core';
import {BouncyHouse} from "../models/bouncy-house.model";

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, searchValue: string): any {
    if (!searchValue) return value;
    return value.filter((v: BouncyHouse) =>
    v.name!.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
    v.description!.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }

}

