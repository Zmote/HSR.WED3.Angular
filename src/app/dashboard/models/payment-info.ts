export type AccountNr = string;

export class PaymentInfo {
  constructor(private targetAccountNr: AccountNr, private amount: number) {
  }

  public static fromDto(data: any): PaymentInfo {
    return new PaymentInfo(data.to, data.amount);
  }

  toDto(): any {
    return {
      target: this.targetAccountNr,
      amount: this.amount
    };
  }
}
