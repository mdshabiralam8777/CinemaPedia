import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTollyComponent } from './hero-tolly.component';

describe('HeroTollyComponent', () => {
  let component: HeroTollyComponent;
  let fixture: ComponentFixture<HeroTollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
