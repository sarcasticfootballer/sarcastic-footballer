import { Component, OnInit,Input, Output , EventEmitter} from '@angular/core';
import { Router} from '@angular/router';
import { IArticle } from '../DTO/Article.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input() story;
 
  article:IArticle;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  articlePage(){
   this.article=this.story;
    console.log(this.article)
    this.router.navigate(['Article/'+this.article]);
  }
}
