export class Rented {
  constructor(
    public id?: undefined,
    public userId?: number,
    public bouncyHouseId?: number,
    public startDate?: Date | null,
    public endDate?: Date | null,
    public rated?: boolean
  ) {}
}
