import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-article-console',
  templateUrl: './admin-article-console.component.html',
  styleUrls: ['./admin-article-console.component.css']
})
export class AdminArticleConsoleComponent implements OnInit {
  private articleData = [{'id': '1', 'headline': 'Wenger leaves Arsenal', 'author': 'Rahul'},
                        {'id': '2', 'headline': '#Emrey out', 'author': 'Rahul'}];
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('#myTable').DataTable();
  });

  }
}
