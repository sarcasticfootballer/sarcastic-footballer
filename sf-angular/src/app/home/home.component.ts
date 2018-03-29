import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latestArticleData = '';
articleData ='';
trendingArticleData = '';
  constructor() { }

  ngOnInit() {
    this.latestArticleData = '[{"id":1,"headline":"Barcelona transfer news: Alaba drops biggest hint yet, Dembele adds fuel to Arsenal rumours and more - 17th March 2018","subheadline":"All the transfer news related to Barcelona Football Club.","author":"Rahul","picturelink":"https://3.bp.blogspot.com/-7_kDgYOsYo8/WpsN2dQm_cI/AAAAAAAAEjY/inArg96duGMarFqkn_e_htaDOcxCDWWvwCLcBGAs/s1600/Mane.jpg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>","views":561},{"id":2,"headline":"5 things Manchester United can do to save their season","subheadline":"Manchester United can still end the season on a high, but here are the 5 things they need to do to achieve that.","author":"Rahul","picturelink":"http://www.footylogue.com/wp-content/uploads/2014/08/Manchester-City-trophy-lift-2013-14.jpg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>","views":561},{"id":3,"headline":"asas","subheadline":"adad","author":"Rahul","picturelink":"https://www.sportsflu.com/wp-content/uploads/2015/12/UnitedvPreston.jpg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>","views":561},{"id":4,"headline":"Premier League","subheadline":"adad","author":"Rahul","picturelink":"https://cdn-images-1.medium.com/max/1600/1*2UyfrxNNxUvYBNAG1104Zg.jpeg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>","views":561},{"id":5,"headline":"Premier League","subheadline":"adad","author":"Rahul","picturelink":"https://cdn-images-1.medium.com/max/1600/1*2UyfrxNNxUvYBNAG1104Zg.jpeg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>","views":561}]';
    this.trendingArticleData = '[{"id":1,"headline":"Barcelona transfer news: Alaba drops biggest hint yet, Dembele adds fuel to Arsenal rumours and more - 17th March 2018","subheadline":"All the transfer news related to Barcelona Football Club.","author":"Rahul","picturelink":"https://3.bp.blogspot.com/-7_kDgYOsYo8/WpsN2dQm_cI/AAAAAAAAEjY/inArg96duGMarFqkn_e_htaDOcxCDWWvwCLcBGAs/s1600/Mane.jpg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>"},{"id":2,"headline":"5 things Manchester United can do to save their season","subheadline":"Manchester United can still end the season on a high, but here are the 5 things they need to do to achieve that.","author":"Rahul","picturelink":"http://www.footylogue.com/wp-content/uploads/2014/08/Manchester-City-trophy-lift-2013-14.jpg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>"}]';
     this.articleData = '[{"id":1,"headline":"Barcelona transfer news: Alaba drops biggest hint yet, Dembele adds fuel to Arsenal rumours and more - 17th March 2018","subheadline":"All the transfer news related to Barcelona Football Club.","author":"Rahul","picturelink":"https://3.bp.blogspot.com/-7_kDgYOsYo8/WpsN2dQm_cI/AAAAAAAAEjY/inArg96duGMarFqkn_e_htaDOcxCDWWvwCLcBGAs/s1600/Mane.jpg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>","views":561},{"id":2,"headline":"5 things Manchester United can do to save their season","subheadline":"Manchester United can still end the season on a high, but here are the 5 things they need to do to achieve that.","author":"Rahul","picturelink":"http://www.footylogue.com/wp-content/uploads/2014/08/Manchester-City-trophy-lift-2013-14.jpg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>","views":561},{"id":3,"headline":"asas","subheadline":"adad","author":"Rahul","picturelink":"https://www.sportsflu.com/wp-content/uploads/2015/12/UnitedvPreston.jpg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>","views":561},{"id":4,"headline":"Premier League","subheadline":"adad","author":"Rahul","picturelink":"https://cdn-images-1.medium.com/max/1600/1*2UyfrxNNxUvYBNAG1104Zg.jpeg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>","views":561},{"id":5,"headline":"Premier League","subheadline":"adad","author":"Rahul","picturelink":"https://cdn-images-1.medium.com/max/1600/1*2UyfrxNNxUvYBNAG1104Zg.jpeg","secondarypicturelink":"lkl","tags":"lkl","content":"<p>asa</p>","views":561}]';
      this.articleData = JSON.parse(this.articleData);
       this.latestArticleData = JSON.parse(this.latestArticleData);
      this.trendingArticleData = JSON.parse(this.trendingArticleData);

  }

}
