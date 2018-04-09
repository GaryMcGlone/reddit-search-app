import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RedditSearchComponent } from './reddit-search/reddit-search.component';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { SearchSubredditsComponent } from './search-subreddits/search-subreddits.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { Routes, RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { DisplaySubredditsComponent } from './display-subreddits/display-subreddits.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: RedditSearchComponent},
  {path: 'subreddits', component: SearchSubredditsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RedditSearchComponent,
    DisplayResultsComponent,
    SearchSubredditsComponent,
    NavBarComponent,
    DisplaySubredditsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
