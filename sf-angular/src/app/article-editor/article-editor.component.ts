//import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Validators,FormGroup,FormControl } from '@angular/forms';
import { tinyMCE} from 'tinymce/tinymce.min.js';
@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {
  articleEditor;
  constructor() { 
    this.articleEditor = new FormGroup({
      headline:new FormControl('',[Validators.required]),
      content:new FormControl('',[Validators.required]),
      subheadline:new FormControl('',[Validators.required]),
      author:new FormControl('',[Validators.required]),
      picturelink:new FormControl('',[Validators.required]),
      secondarypicturelink:new FormControl('',[Validators.required]),
      tags:new FormControl('',[Validators.required])


    });

  }

  ngOnInit() {
  }

  hello(){
    console.log(this.articleEditor.get('headline').value);
    console.log(document.getElementById('content').innerHTML);
    console.log(tinyMCE.get('content').getContent());
  }
}
