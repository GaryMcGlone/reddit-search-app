import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RedditService } from '../services/reddit.service';
declare var jqeury: any;
declare var $: any;

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

  posts: RedditResponse;
  defaultPosts: RedditResponse;
  ErrorMessage: string;

  constructor(private _redditService: RedditService) { }

  searchReddit(search: string, limit: string, sort: string): boolean {
    this._redditService.searchReddit(search, limit, sort.toLowerCase())
      .subscribe(data => {
        this.posts = data.data;
      }, error => this.ErrorMessage = <any>error);
    return false;
  }

  ngOnInit() {
    this._redditService.searchReddit(undefined, 25, "hot")
      .subscribe(data => {
        this.posts = data.data;
      }, error => this.ErrorMessage = <any>error);
  }
  ngAfterViewInit(){
    $('.ui.dropdown').dropdown();
  }
}
