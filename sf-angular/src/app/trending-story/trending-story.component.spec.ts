import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingStoryComponent } from './trending-story.component';

describe('TrendingStoryComponent', () => {
  let component: TrendingStoryComponent;
  let fixture: ComponentFixture<TrendingStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
