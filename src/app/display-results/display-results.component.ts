import { Component, OnInit, Input } from '@angular/core';
import { RedditService } from '../services/reddit.service';


@Component({
  selector: 'display-results',
  templateUrl: './display-results.component.html',
  styleUrls: ['./display-results.component.css'],
  providers: [RedditService]
})
export class DisplayResultsComponent implements OnInit {

   @Input() post:IRedditResponse;
   @Input() defaultPost:IRedditResponse;

  constructor(private _redditService: RedditService) { }

  ngOnInit() {
  }
}
