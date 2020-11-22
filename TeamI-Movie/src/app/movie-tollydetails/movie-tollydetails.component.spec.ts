import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTollydetailsComponent } from './movie-tollydetails.component';

describe('MovieTollydetailsComponent', () => {
  let component: MovieTollydetailsComponent;
  let fixture: ComponentFixture<MovieTollydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTollydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTollydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
