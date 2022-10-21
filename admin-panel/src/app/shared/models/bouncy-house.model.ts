/*
* Bouncy House Model
* */
import {BouncyHouseSizeEnum} from "../enums/size.enum";
import {BouncyHouseThemeEnum} from "../enums/theme.enum";

export class BouncyHouse{
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public pricePerDay?: number,
    public size?: BouncyHouseSizeEnum,
    public theme?: BouncyHouseThemeEnum,
    public weightLimit?: number,
    public constructionTimeInMinutes?: number,
    public withPowerConnection?: boolean,
    public imageUrl?: string
  ) {
  }
}

