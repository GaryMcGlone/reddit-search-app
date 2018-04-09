import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySubredditsComponent } from './display-subreddits.component';

describe('DisplaySubredditsComponent', () => {
  let component: DisplaySubredditsComponent;
  let fixture: ComponentFixture<DisplaySubredditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySubredditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySubredditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
