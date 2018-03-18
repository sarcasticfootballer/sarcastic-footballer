import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article } from '../DTO/Article.model';
@Injectable()
export class DataHandlerService {
  constructor(private http: HttpClient) {}

  private baseUrl = `${window.location.origin}/api/`;
  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  submitArticle(article: Article) {
    console.log(article);
    this.http.post(`${this.baseUrl}publisharticle`, article).subscribe(a => console.log(a));
  }
}


