import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsBollyComponent } from './hero-details-bolly.component';

describe('HeroDetailsBollyComponent', () => {
  let component: HeroDetailsBollyComponent;
  let fixture: ComponentFixture<HeroDetailsBollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailsBollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsBollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
