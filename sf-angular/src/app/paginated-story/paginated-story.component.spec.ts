import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedStoryComponent } from './paginated-story.component';

describe('PaginatedStoryComponent', () => {
  let component: PaginatedStoryComponent;
  let fixture: ComponentFixture<PaginatedStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatedStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
