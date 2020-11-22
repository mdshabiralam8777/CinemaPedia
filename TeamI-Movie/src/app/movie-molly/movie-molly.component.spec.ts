import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMollyComponent } from './movie-molly.component';

describe('MovieMollyComponent', () => {
  let component: MovieMollyComponent;
  let fixture: ComponentFixture<MovieMollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieMollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
