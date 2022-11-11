export class Rented {
  constructor(
    public id: number,
    public userId: number,
    public bouncyHouseId: number,
    public startDate: Date,
    public endDate: Date,
    public rated: boolean
  ) {
  }
}
