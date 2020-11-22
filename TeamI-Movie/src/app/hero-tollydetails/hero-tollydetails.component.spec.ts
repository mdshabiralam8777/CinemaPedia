import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTollydetailsComponent } from './hero-tollydetails.component';

describe('HeroTollydetailsComponent', () => {
  let component: HeroTollydetailsComponent;
  let fixture: ComponentFixture<HeroTollydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTollydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTollydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
