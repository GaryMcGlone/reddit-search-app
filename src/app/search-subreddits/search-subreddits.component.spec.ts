import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSubredditsComponent } from './search-subreddits.component';

describe('SearchSubredditsComponent', () => {
  let component: SearchSubredditsComponent;
  let fixture: ComponentFixture<SearchSubredditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSubredditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSubredditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
