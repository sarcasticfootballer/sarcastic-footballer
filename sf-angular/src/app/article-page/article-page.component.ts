import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../services/data-handler.service';
import { Observable,Subscribable } from 'rxjs/Observable';
import { IArticle } from '../DTO/Article.model';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
articles:IArticle[];
  constructor(private datahandler: DataHandlerService) { }

  ngOnInit() {
  }
getArticle(){
  this.datahandler.getLatestArticles().subscribe((a:any)=>{this.articles=a;console.log(this.articles)});
  
}
}
