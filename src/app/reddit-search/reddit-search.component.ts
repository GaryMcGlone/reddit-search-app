import { Component, OnInit } from '@angular/core';
import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'reddit-search',
  templateUrl: './reddit-search.component.html',
  styleUrls: ['./reddit-search.component.css'],
  providers: [RedditService]
})
export class RedditSearchComponent implements OnInit {

  posts: Children;
  ErrorMessage: string;

  constructor(private _redditService: RedditService) { }

  searchReddit(search: string, sortBy: string): boolean {
    this._redditService.searchReddit(search, sortBy)
      .subscribe(data => {
        this.posts = data.data;
      }, error => this.ErrorMessage = <any>error);
    return false;
  }

  sortBy(sortBy: string): boolean{

    console.log(sortBy);

    return false;
  }

  ngOnInit() {
  }
}
