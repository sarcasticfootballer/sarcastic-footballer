import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class DataHandlerService {

  constructor(private http: HttpClient) { }

  getData(url: string):Observable<any> {
    return this.http.get(url);
  }

}
