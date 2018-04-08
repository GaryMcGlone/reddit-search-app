import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RedditSearchComponent } from './reddit-search/reddit-search.component';
import { DisplayResultsComponent } from './display-results/display-results.component';



@NgModule({
  declarations: [
    AppComponent,
    RedditSearchComponent,
    DisplayResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
