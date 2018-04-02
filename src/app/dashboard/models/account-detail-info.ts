import {AccountNr} from './types/type-definitions';

export class AccountDetailInfo {
  constructor(public accountNr: AccountNr = '',
              public amount: number = 0,
              public firstname: string = '',
              public lastname: string = '') {
  }

  public static fromDto(data: any): AccountDetailInfo {
    return new AccountDetailInfo(
      data.accountNr,
      data.amount,
      data.owner.firstname,
      data.owner.lastname
    );
  }
}
