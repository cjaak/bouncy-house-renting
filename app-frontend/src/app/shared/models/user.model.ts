/*
 * User Model
 * */
export class User {
  public constructor(
    public id: number,
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: Date,
    public street?: string,
    public houseNumber?: string,
    public zipCode?: number,
    public city?: string
  ) {}
}
