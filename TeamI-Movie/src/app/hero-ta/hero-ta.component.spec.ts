import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTaComponent } from './hero-ta.component';

describe('HeroTaComponent', () => {
  let component: HeroTaComponent;
  let fixture: ComponentFixture<HeroTaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
