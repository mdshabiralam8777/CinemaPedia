import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageMovieComponent } from './language-movie.component';

describe('LanguageMovieComponent', () => {
  let component: LanguageMovieComponent;
  let fixture: ComponentFixture<LanguageMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
