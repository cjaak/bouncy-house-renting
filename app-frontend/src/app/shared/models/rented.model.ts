
export class Rented {
  constructor(
    public id: undefined,
    public userId: string,
    public bouncyHouseId: number,
    public startDate: Date,
    public endDate: Date,
    public rated: boolean
  ) {}
}
