import { Component, OnInit,Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input() story;
  @Output() article = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  articlePage(){
    this.article.emit();
  }
}
