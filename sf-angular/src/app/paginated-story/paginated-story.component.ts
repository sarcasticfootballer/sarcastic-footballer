import { Component, OnInit,Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paginated-story',
  templateUrl: './paginated-story.component.html',
  styleUrls: ['./paginated-story.component.css']
})
export class PaginatedStoryComponent implements OnInit {
  @Input() paginatedStory;
  constructor() { }

  ngOnInit() {
  }

}
