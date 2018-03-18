import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
articleData ='';
  constructor() { }

  ngOnInit() {
    this.articleData = '[{"headline":"Barcelona transfer news: Alaba drops biggest hint yet, Dembele adds fuel to Arsenal rumours and more - 17th March 2018","subheadline":"All the transfer news related to Barcelona Football Club.","author":"Rahul","picturelink":"http://e0.365dm.com/16/08/16-9/20/premier-league-football-theo-walcott-super-sunday-arsenal-liverpool_3764765.jpg?20160814172900","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>"},{"headline":"5 things Manchester United can do to save their season","subheadline":"Manchester United can still end the season on a high, but here are the 5 things they need to do to achieve that.","author":"Rahul","picturelink":"https://statics.sportskeeda.com/editor/2018/03/e6ef7-1521307698-800.jpg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>"},{"headline":"asas","subheadline":"adad","author":"Rahul","picturelink":"http://e0.365dm.com/16/08/16-9/20/premier-league-football-theo-walcott-super-sunday-arsenal-liverpool_3764765.jpg?20160814172900","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>"},{"headline":"Premier League","subheadline":"adad","author":"Rahul","picturelink":"https://statics.sportskeeda.com/editor/2018/03/e6ef7-1521307698-800.jpg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>"}]';
      this.articleData = JSON.parse(this.articleData);
  }

}
