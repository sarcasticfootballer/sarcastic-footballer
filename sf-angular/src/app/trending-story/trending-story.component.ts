import { Component, OnInit,Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-trending-story',
  templateUrl: './trending-story.component.html',
  styleUrls: ['./trending-story.component.css']
})
export class TrendingStoryComponent implements OnInit {
@Input() trendingStory;
  constructor() { }

  ngOnInit() {
  }

}
