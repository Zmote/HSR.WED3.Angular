import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {SecurityTokenStore} from '../services';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenStore: SecurityTokenStore) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenStore.storedValue) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenStore.storedValue.token}`
        }
      });
    }
    return next.handle(request);
  }
}
