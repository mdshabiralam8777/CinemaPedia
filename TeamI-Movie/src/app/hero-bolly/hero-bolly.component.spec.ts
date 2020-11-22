import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBollyComponent } from './hero-bolly.component';

describe('HeroBollyComponent', () => {
  let component: HeroBollyComponent;
  let fixture: ComponentFixture<HeroBollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
