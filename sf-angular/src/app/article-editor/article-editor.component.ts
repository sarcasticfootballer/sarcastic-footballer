// import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataHandlerService } from '../services/data-handler.service';
import { Article, IArticle } from '../DTO/Article.model';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {
  articleEditor;

  constructor(private datahandler: DataHandlerService) {
    this.articleEditor = new FormGroup({
      headline: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      subheadline: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      picturelink: new FormControl('', [Validators.required]),
      secondarypicturelink: new FormControl('', [Validators.required]),
      tags: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {}

  submit() {
    const article: IArticle = new Article(
      this.articleEditor.get('headline').value,
      this.articleEditor.get('content').value,
      this.articleEditor.get('subheadline').value,
      this.articleEditor.get('author').value,
      this.articleEditor.get('picturelink').value,
      this.articleEditor.get('secondarypicturelink').value,
      this.articleEditor.get('tags').value
    );

    this.datahandler.submitArticle(article);
  }
}
