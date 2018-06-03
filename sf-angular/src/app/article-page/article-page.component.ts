import { Component, OnInit ,Input} from '@angular/core';
import { DataHandlerService } from '../services/data-handler.service';
import { Observable,Subscribable } from 'rxjs/Observable';
import { IArticle } from '../DTO/Article.model';
import { Router, ActivatedRoute} from '@angular/router';
import { CommonService} from '../services/common.service';
@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
articles:IArticle[];
story:IArticle;
id;
  constructor(private common: CommonService,private route:ActivatedRoute,private router:Router) { 
    this.route.params.subscribe(params => {
      this.id = params['article'];
      //console.log(this.story)
      });
  }

  ngOnInit() {
    this.story=this.common.getArticles(this.id);
    console.log(this.story)
  }

}
