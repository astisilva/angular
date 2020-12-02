import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePresentationComponent } from './movie-presentation.component';

describe('MoviePresentationComponent', () => {
  let component: MoviePresentationComponent;
  let fixture: ComponentFixture<MoviePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
