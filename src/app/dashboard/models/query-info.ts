export class QueryInfo {
  constructor(public count: number = 3,
              public fromDate: string = '',
              public toDate: string = '',
              public skip: number = 0) {
  }

  public static fromDto(data: any): QueryInfo {
    return new QueryInfo(
      data.count,
      data.fromDate,
      data.toDate,
      data.skip
    );
  }

  toDto(): any {
    return {
      count: this.count,
      fromDate: this.fromDate,
      toDate: this.toDate,
      skip: this.skip
    };
  }
}
