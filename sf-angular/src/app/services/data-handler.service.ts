import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article, IArticle } from '../DTO/Article.model';
import  'rxjs/add/operator/map';
@Injectable()
export class DataHandlerService {
  constructor(private http: HttpClient) {}

  private baseUrl = `${window.location.origin}/api/`;
  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  submitArticle(article: Readonly<IArticle>) {
    console.log(article);
    this.http.post(`${this.baseUrl}publisharticle`, article).subscribe(a => console.log(a));
  }

  getLatestArticles() {
    return this.http.get(`${this.baseUrl}latestarticles`).map((a:any)=>a.data);
  }
}


