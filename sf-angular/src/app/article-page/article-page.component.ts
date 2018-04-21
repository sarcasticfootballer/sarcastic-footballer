import { Component, OnInit ,Input} from '@angular/core';
import { DataHandlerService } from '../services/data-handler.service';
import { Observable,Subscribable } from 'rxjs/Observable';
import { IArticle } from '../DTO/Article.model';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
articles:IArticle[];
story:IArticle;
  constructor(private datahandler: DataHandlerService,private route:ActivatedRoute,private router:Router) { 
    this.route.params.subscribe(params => {
      this.story = params['article'];
      console.log(JSON.stringify(this.story))
      });
  }

  ngOnInit() {
  }
getArticle(){
  this.datahandler.getLatestArticles().subscribe((a:any)=>{this.articles=a;console.log(this.articles)});
  
}
}
