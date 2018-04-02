import {EventEmitter, Injectable, Output} from '@angular/core';
import {SecurityTokenStore} from '../../auth/services/credential-management';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Credential} from '../../auth/models';
import {Observable} from 'rxjs/Observable';
import {QueryInfo} from '../models/query-info';
import {AccountDetailInfo} from '../models/account-detail-info';
import {TransactionInfo} from '../models/transaction-info';
import {PaymentInfo} from '../models/payment-info';

@Injectable()
export class TransactionService {
  // For now a basic boolean field
  // we don't use the value here, we just need it to track a change
  // in this case, when a transfer has been completed
  // this way we can subscribe to it from another component and update it
  // in this case that component being the TransactionComponent, updating itself
  // when a payment is executed
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  static generateAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  constructor(private tokenStore: SecurityTokenStore, private http: HttpClient) {
  }

  public getAccount(accountNr: number, token: string =
    this.tokenStore.storedValue ? this.tokenStore.storedValue.token : ''): Observable<AccountDetailInfo> {
    return this.get(token, `/accounts/${accountNr}`)
      .pipe(map((result: any) => {
        if (result) {
          return AccountDetailInfo.fromDto(result);
        }
        return null;
      }));
  }

  public getAccountDetails(token: string =
                             this.tokenStore.storedValue ? this.tokenStore.storedValue.token : ''): Observable<AccountDetailInfo> {
    return this.get(token, '/accounts')
      .pipe(map((result: any) => {
        if (result) {
          return AccountDetailInfo.fromDto(result);
        }
        return null;
      }));
  }

  public getTransactions(query: QueryInfo,
                         token: string =
                           this.tokenStore.storedValue ? this.tokenStore.storedValue.token : ''): Observable<TransactionInfo[]> {
    return this.get(token, '/accounts/transactions', query.toDto())
      .pipe(map((response: any) => {
        if (response) {
          return response.result.map((entry) => {
            return TransactionInfo.fromDto(entry);
          });
        }
        return null;
      }));
  }

  public transfer(paymentInfo: PaymentInfo,
                  token: string = this.tokenStore.storedValue ? this.tokenStore.storedValue.token : ''): Observable<Object> {
    return this.post(token, '/accounts/transactions', paymentInfo.toDto());
  }

  private post(token: string, path: string, dto: any): Observable<Object> {
    return this.http.post(
      environment.serverBaseUrl + path,
      JSON.stringify(dto),
      {
        headers: TransactionService.generateAuthHeaders(token),
      }).pipe(map((response) => {
        if (response) {
          return response;
        }
        return null;
      }),
      catchError((error) => of<Credential>(null)));
  }

  private get(token: string, path: string, data: any = null) {
    return this.http.get(
      environment.serverBaseUrl + path,
      {
        headers: TransactionService.generateAuthHeaders(token),
        params: data
      })
      .pipe(
        map((response: any) => {
          if (response) {
            return response;
          }
          return null;
        }),
        catchError((error: any) => of<Credential>(null))
      );
  }
}
