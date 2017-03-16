export class User {

  public id: number;
  public email: string;
  public password: string;
  public avatar: Avatar;
  public token: string;
  public info: UserInfo;

  constructor() {

  }

  makeFromServer(serverObj) {
    this.id = serverObj.id;
    console.log(serverObj);
    this.email = serverObj.email;

    this.avatar = new Avatar();
    this.avatar.makeFromServer(serverObj.avatar);

    this.info = new UserInfo();
    this.info.makeFromServer(serverObj.info);
  }

  setToken(token){
    this.token = token;
  }
}

export class UserInfo {

  public firstName: string;
  public lastName: string;
  public country: string;
  public timezone: string;

  constructor() {
  }

  makeFromServer(serverInfoObj) {
    this.firstName = serverInfoObj.firstName;
    this.lastName = serverInfoObj.lastName;
    this.country = serverInfoObj.country;
    this.timezone = serverInfoObj.timezone;
  }
}

export class Avatar {

  public large: string;
  public small: string;
  public source: string;

  constructor() {
  }

  makeFromServer(serverAvatarObj) {
    this.large = serverAvatarObj.large;
    this.small = serverAvatarObj.small;
    this.source = serverAvatarObj.source;
  }
}
