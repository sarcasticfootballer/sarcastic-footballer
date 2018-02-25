import { Component, OnInit } from '@angular/core';

import { DataHandlerService } from './services/data-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = '';
  constructor(private dataHandlerService:DataHandlerService){}

  ngOnInit(){
    this.dataHandlerService.getData('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.data = JSON.stringify(data));
  }
}
