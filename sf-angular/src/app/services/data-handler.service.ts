import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataHandlerService {
  constructor(private http: HttpClient) {}

  private url = `${window.location.href}/api/newarticle`;
  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  submitArticle(article: NewArticle) {
    this.http.post(this.url, article);
  }
}

interface NewArticle {
  headline: string;
  sideHeadline: string;
  picLinkMain: string;
  picLinkSec: string;
  content: string;
  authorName: string;
  tags: string[];
  timestamp: Date;
}
