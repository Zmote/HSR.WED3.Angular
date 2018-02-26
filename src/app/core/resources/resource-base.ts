import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {environment} from '../../../environments/environment';

export abstract class ResourceBase {

  static JSON_HEADERS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  protected get(path: string): Observable<any> {
    return this.http.get(environment.serverBaseUrl + path);
  }

  protected post(path: string, dto: any): Observable<any> {
    return this.http.post(
      environment.serverBaseUrl + path,
      JSON.stringify(dto),
      ResourceBase.JSON_HEADERS);
  }
}
