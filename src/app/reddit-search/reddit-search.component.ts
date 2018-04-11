import { Component, OnInit } from '@angular/core';
import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'reddit-search',
  templateUrl: './reddit-search.component.html',
  styleUrls: ['./reddit-search.component.css'],
  providers: [RedditService]
})
export class RedditSearchComponent implements OnInit {

  LimitOptions: string[] = [
    "5",
    "10",
    "25",
    "50",
    "100"
  ]

  SortOptions: string[] = [
    "Hot",
    "Relevant",
    "New",
    "Top"
  ]

  posts: Children;
  defaultPosts: Children;
  ErrorMessage: string;

  constructor(private _redditService: RedditService) { }

  searchReddit(search: string): boolean {
    this._redditService.searchReddit(search)
      .subscribe(data => {
        this.posts = data.data;
      }, error => this.ErrorMessage = <any>error);
    return false;
  }

  ngOnInit() {
    this._redditService.searchReddit(undefined)
      .subscribe(data => {
        this.posts = data.data;
      }, error => this.ErrorMessage = <any>error);
  }
}
