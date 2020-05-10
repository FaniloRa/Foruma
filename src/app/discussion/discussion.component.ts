import { Component, OnInit } from '@angular/core';
declare var tinymce: any;
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

title = 'angulartinymc';

  constructor() { }

  ngOnInit() {

    tinymce.init(
      {
          selector: "#mymce1"
      });
  }

}
