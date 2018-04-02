import {AccountNr} from './types/type-definitions';

export class TransactionInfo {
  constructor(public from: AccountNr = '',
              public target: AccountNr = '',
              public amount: number = 0,
              public total: number = 0,
              public date: string = '') {}

  public static fromDto(data: any): TransactionInfo {
    return new TransactionInfo(
      data.from,
      data.target,
      data.amount,
      data.total,
      data.date);

  }
}
