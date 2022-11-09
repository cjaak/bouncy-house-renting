import {FormControl, ɵValue} from "@angular/forms";

export class Rented {
  constructor(
    public id: undefined,
    public userId: string,
    public bouncyHouseId: number,
    public startDate: ɵValue<FormControl<Date | null>> | undefined,
    public endDate: ɵValue<FormControl<Date | null>> | undefined
  ) {
  }
}
