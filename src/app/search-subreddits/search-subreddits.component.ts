import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'app-search-subreddits',
  templateUrl: './search-subreddits.component.html',
  styleUrls: ['./search-subreddits.component.css'],
  providers: [RedditService]
})
export class SearchSubredditsComponent implements OnInit {

  subreddits: Children;

  constructor(private _redditService: RedditService) { }

  searchForSubreddits(search: string) : boolean{
    this._redditService.searchForSubreddits(search)
    .subscribe(data => {
      this.subreddits = data.data;
      console.log(this.subreddits)
    })
    return false;
  }

  ngOnInit() {
  }

}
