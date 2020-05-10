import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ForumComponent } from './forum/forum.component';
import { EditorModule } from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    AppComponent,
    DiscussionComponent,
    ForumComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
