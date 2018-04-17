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

  // this is an array of objects so that you can set a default value of 25 in the html
  LimitOptions = [{ value: "5" }, { value: "10" }, { value: "25" }, { value: "50" }, { value: "100" }]

  //array of sort options no default value
  SortOptions: string[] = ["Hot", "Relevant", "New", "Top"]

  // variables for storing reddit posts
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
    //display the current front page on load before anything has been searched
    this._redditService.searchReddit(undefined, 25, "hot")
      .subscribe(data => {
        this.posts = data.data;
      }, error => this.ErrorMessage = <any>error);
  }

  //initializing jquery for the animation/styling on the dropdowns
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
}
