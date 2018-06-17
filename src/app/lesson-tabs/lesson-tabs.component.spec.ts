import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTabsComponent } from './lesson-tabs.component';

describe('TopicPillsComponent', () => {
  let component: LessonTabsComponent;
  let fixture: ComponentFixture<LessonTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
