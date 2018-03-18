import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article } from '../DTO/Article.model'
@Injectable()
export class DataHandlerService {
  constructor(private http: HttpClient) {}

  private url = `${window.location.href}/api/newarticle`;
  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  submitArticle(article: Article) {
    console.log("trig");
    this.http.post(this.url, article).subscribe(a=>console.log(a));
  }
}


