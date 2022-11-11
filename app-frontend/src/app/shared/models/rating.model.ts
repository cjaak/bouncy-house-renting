export class Rating{
  constructor(
    public id?: number,
    public userId?: number,
    public bouncyHouseId?: number,
    public rentedId?: number,
    public stars?: number,
    public comment?: string
  ) {
  }
}
