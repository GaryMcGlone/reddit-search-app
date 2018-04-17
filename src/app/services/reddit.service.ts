import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditService {

  //reddit api endpoints
  private endpoint = "http://www.reddit.com/r/all/search.json?q=";
  private frontpage = "http://www.reddit.com/r/all/hot/.json";
  private subredditEndpoint = "https://www.reddit.com/subreddits/search.json?q=";

  constructor(private _http: HttpClient) { }

  searchReddit(searchTerm, limit , sort): Observable<RedditPost> {

    console.log(searchTerm)
    //if search is undefined ( search will be undefined before anything is searched ) get the current reddit frontpage
    if (searchTerm == undefined) {
      return this._http.get<RedditPost>(this.frontpage)
        .do(res => res.data.children
          .forEach(child => {
            JSON.stringify(child.data);
          })
        ).catch(this.handleError)
    }
    // else if its not defined then something has been searched - use the search endpoint + searchStr + options
    else {
      return this._http.get<RedditPost>(this.endpoint + searchTerm + "&limit=" + limit + "&sort=" + sort)
        .do(res => res.data.children
          .forEach(child => {
            JSON.stringify(child.data);
          })
        ).catch(this.handleError)
    }
  }

  //Searching for a subreddit uses a different endpoint but sends data back in the same format as a normal search so you can still use the same interface
  searchForSubreddits(search): Observable<RedditPost> {
    return this._http.get<RedditPost>(this.subredditEndpoint + search)
      .do(res => res.data.children
        .forEach(child => {
          JSON.stringify(child.data);
        })
      ).catch(this.handleError)
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
