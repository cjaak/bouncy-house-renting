import { Pipe, PipeTransform } from '@angular/core';
import {BouncyHouse} from "../models/bouncy-house.model";
import {Sort} from "@angular/material/sort";
import {BouncyHouseSizeEnum} from "../enums/size.enum";

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, sort: Sort): any {
    if(sort.direction === "" || sort.active === "") return value

    const isAsc = sort.direction === 'asc';
        return value.sort((a: BouncyHouse, b: BouncyHouse) => {
          switch (sort.active){
            case 'name':
              return this.compareAlphaNum(a.name!, b.name!, isAsc);
            case 'pricePerDay':
              return this.compareAlphaNum(a.pricePerDay!, b.pricePerDay!, isAsc);
            case 'size':
              return this.compareSize(a.size!, b.size!, isAsc);
            default:
              return 0;

            }
        })
  }


  private  compareAlphaNum(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? -1 : 1);
  }


  private compareSize(a: BouncyHouseSizeEnum, b: BouncyHouseSizeEnum, isAsc: boolean) {
    const order = ["S", "M", "L", "XL"];
    return (order.indexOf(a) - order.indexOf(b)) * (isAsc ? -1 : 1);
  }

}
