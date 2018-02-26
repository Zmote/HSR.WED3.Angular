export class Account {
  constructor(public login: string,
              public firstname: string,
              public lastname: string,
              public accountNr: string) {
  }

  public static fromDto(data: any): Account {
    return new Account(data.login, data.firstname, data.lastname, data.accountNr);
  }

  public static fromInfoDto(data: any): Account {
    return new Account(
      (data.owner) ? data.owner.login : void 0,
      (data.owner) ? data.owner.firstname : void 0,
      (data.owner) ? data.owner.lastname : void 0,
      data.accountNr);
  }

  toDto(): any {
    return {
      login: this.login,
      firstname: this.firstname,
      lastname: this.lastname,
      accountNr: this.accountNr
    };
  }
}
