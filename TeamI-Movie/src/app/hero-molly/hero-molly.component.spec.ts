import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMollyComponent } from './hero-molly.component';

describe('HeroMollyComponent', () => {
  let component: HeroMollyComponent;
  let fixture: ComponentFixture<HeroMollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroMollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
