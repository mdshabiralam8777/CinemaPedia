import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesBollyComponent } from './movies-bolly.component';

describe('MoviesBollyComponent', () => {
  let component: MoviesBollyComponent;
  let fixture: ComponentFixture<MoviesBollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesBollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesBollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
