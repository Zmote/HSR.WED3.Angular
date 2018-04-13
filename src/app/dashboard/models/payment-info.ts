import {AccountNr} from './types/type-definitions';

export class PaymentInfo {
  constructor(public target: AccountNr, public amount: number, public total: number) {
  }

  public static fromDto(data: any): PaymentInfo {
    return new PaymentInfo(data.target, data.amount, data.total);
  }

  toDto(): any {
    return {
      target: this.target,
      amount: this.amount
    };
  }
}
