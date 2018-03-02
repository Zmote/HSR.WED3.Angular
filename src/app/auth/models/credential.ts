import {Account} from './account';

export class Credential {
  constructor(
    public token: string,
    public owner: Account) {
  }

  public static fromDto(data: any): Credential {
    return new Credential(data.token, Account.fromDto(data.owner));
  }

  toDto(): any {
    return {
      token: this.token,
      owner: (this.owner) ? this.owner.toDto() : null
    };
  }
}
