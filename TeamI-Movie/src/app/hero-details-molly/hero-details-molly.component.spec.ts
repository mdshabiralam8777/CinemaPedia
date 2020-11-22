import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsMollyComponent } from './hero-details-molly.component';

describe('HeroDetailsMollyComponent', () => {
  let component: HeroDetailsMollyComponent;
  let fixture: ComponentFixture<HeroDetailsMollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailsMollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsMollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
