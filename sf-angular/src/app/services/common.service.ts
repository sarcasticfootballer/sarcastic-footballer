import { Injectable } from '@angular/core';
import { IArticle } from '../DTO/Article.model';
@Injectable()
export class CommonService {
  latestArticleData:IArticle[];
  articleData ='';
  trendingArticleData = '';
  articlesMap = new Map();
  constructor() { }

  setArticles(articles){
  //this.latestArticleData=articles;
  for(let a of articles){
    this.articlesMap.set(a.id,a);
    console.log(this.articlesMap)
  }
 
}
getArticles(id){
  console.log(id);
  console.log(this.articlesMap)
  return this.articlesMap.get(parseInt(id));
}
}
