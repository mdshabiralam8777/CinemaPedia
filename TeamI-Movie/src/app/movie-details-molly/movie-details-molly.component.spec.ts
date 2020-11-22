import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsMollyComponent } from './movie-details-molly.component';

describe('MovieDetailsMollyComponent', () => {
  let component: MovieDetailsMollyComponent;
  let fixture: ComponentFixture<MovieDetailsMollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsMollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsMollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
