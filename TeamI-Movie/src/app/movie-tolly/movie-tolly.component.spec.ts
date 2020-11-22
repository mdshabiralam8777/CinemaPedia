import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTollyComponent } from './movie-tolly.component';

describe('MovieTollyComponent', () => {
  let component: MovieTollyComponent;
  let fixture: ComponentFixture<MovieTollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
