import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataHandlerService } from './services/data-handler.service';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { StoryComponent } from './story/story.component';
import { TrendingStoryComponent } from './trending-story/trending-story.component';
import { PaginatedStoryComponent } from './paginated-story/paginated-story.component';



const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Author', component: AuthorsComponent },
  { path: 'ArticleEditor', component: ArticleEditorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AuthorsComponent,
    ArticleEditorComponent,
    StoryComponent,
    TrendingStoryComponent,
    PaginatedStoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    EditorModule
  ],
  providers: [DataHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
