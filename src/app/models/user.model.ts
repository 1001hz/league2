export class User {
  constructor(
    public id?: number,
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public password?: string,
    public avatar?: string,
    public token?: string,
    public country?: string,
    public info?: UserInfo
  ) {
    this.info = new UserInfo(firstName, lastName, country, "GMT");
  }
}

class UserInfo {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public country?: string,
    public timezone?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.timezone = timezone;
  }
}
