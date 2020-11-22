import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDetailsBollyComponent } from './movies-details-bolly.component';

describe('MoviesDetailsBollyComponent', () => {
  let component: MoviesDetailsBollyComponent;
  let fixture: ComponentFixture<MoviesDetailsBollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesDetailsBollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDetailsBollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
