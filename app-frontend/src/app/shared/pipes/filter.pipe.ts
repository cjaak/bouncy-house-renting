import { Pipe, PipeTransform } from '@angular/core';
import {BouncyHouse} from "../models/bouncy-house.model";
import {BouncyHouseSizeEnum} from "../enums/size.enum";
import {BouncyHouseThemeEnum} from "../enums/theme.enum";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: Map<string,any>): any {
    return value.filter((house: BouncyHouse) => {
      return  (filter.get("sizes") as BouncyHouseSizeEnum[]).includes(house.size!)
      && (filter.get("themes") as BouncyHouseThemeEnum[]).includes(house.theme!)
      && (filter.get("withPowerConnection") as boolean[]).includes(house.withPowerConnection!)
      && (filter.get("minPrice")) <= house.pricePerDay!
      && (filter.get("maxPrice")) >= house.pricePerDay!
    })

  }

}
