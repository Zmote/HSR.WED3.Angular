export class PaymentInfo {
  constructor(public accountNr: number,
              public amount: number,
              public firstname: string,
              public lastname: string) {
  }

  public static fromDto(data: any): PaymentInfo {
    return new PaymentInfo(
      data.accountNr,
      data.amount,
      data.owner.firstname,
      data.owner.lastname
    );
  }
}
