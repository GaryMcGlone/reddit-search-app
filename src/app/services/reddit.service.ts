import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditService {

  private endpoint = "http://www.reddit.com/r/all/search.json?q=";
  private frontpage = "http://www.reddit.com/r/all/hot/search.json";
  private subredditEndpoint = "https://www.reddit.com/subreddits/search.json?q=";

  constructor(private _http: HttpClient) { }

  searchReddit(searchTerm): Observable<RedditPost> {
    return this._http.get<RedditPost>(this.endpoint + searchTerm)
      .do(res => res.data.children
        .forEach(child => {
          JSON.stringify(child.data);
        })
      ).catch(this.handleError)
  }

  searchForSubreddits(search) : Observable<RedditPost> {
    return this._http.get<RedditPost>(this.subredditEndpoint + search)
    .do(res => res.data.children
      .forEach(child => {
        JSON.stringify(child.data);
      })
    ).catch(this.handleError)
  }
  defaultPosts(){
    return this._http.get<RedditPost>(this.frontpage)
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
