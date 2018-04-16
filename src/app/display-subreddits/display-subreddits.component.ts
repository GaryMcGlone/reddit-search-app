import { Component, OnInit , Input} from '@angular/core';
import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'display-subreddits',
  templateUrl: './display-subreddits.component.html',
  styleUrls: ['./display-subreddits.component.css']
})
export class DisplaySubredditsComponent implements OnInit {

  @Input() subreddit: RedditResponse;

  constructor(private _redditService: RedditService) { }

  ngOnInit() {
  }

}
