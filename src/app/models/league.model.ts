import { User } from './user.model';

export class League {

  public createdAt: string;
  public id: string;
  public inviteToken: string;
  public invites: Array<User>;
  public name: string;
  public ownedByUser: User;
  public participants: Array<User>;
  public settings: LeagueSettings;
  public updatedAt: string;

  constructor() {
  }

  makeFromServer(serverObj) {
    this.createdAt = serverObj.createdAt;
    this.id = serverObj.id;
    this.inviteToken = serverObj.inviteToken;

    this.invites = [];
    for(var i=0; i<serverObj.invites; i++){
      let user = new User();
      user.makeFromServer(serverObj.invites[i]);
      this.invites.push(user);
    }

    this.name = serverObj.name;

    this.ownedByUser = new User();
    this.ownedByUser.makeFromServer(serverObj.ownedByUser);

    this.participants = [];
    for(var i=0; i<serverObj.participants; i++){
      let participant = new User();
      participant.makeFromServer(serverObj.participants[i]);
      this.participants.push(participant);
    }

    this.settings = new LeagueSettings();
    this.settings.makeFromServer(serverObj.settings);

    this.updatedAt = serverObj.updatedAt;
  }
}

export class LeagueSettings {

  public maxRounds: number;
  public roundInterval: string;
  public startDate: string;
  public timezone: string;
  public updatedAt: string;
  public releaseTypes: ReleaseTypes;

  constructor() {

  }

  makeFromServer(settingsFromServer) {
    this.maxRounds = settingsFromServer.maxRounds;
    this.roundInterval = settingsFromServer.roundInterval;
    this.startDate = settingsFromServer.startDate;
    this.timezone = settingsFromServer.timezone;
    this.updatedAt = settingsFromServer.updatedAt;
    this.releaseTypes = settingsFromServer.releaseTypes;
  }
}

export class ReleaseTypes {
  public albums: string;
  public singles: string;
  public tracks: string;

  constructor() {

  }

  makeFromServer() {

  }
}
