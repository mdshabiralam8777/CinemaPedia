import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerodetilsTaComponent } from './herodetils-ta.component';

describe('HerodetilsTaComponent', () => {
  let component: HerodetilsTaComponent;
  let fixture: ComponentFixture<HerodetilsTaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerodetilsTaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerodetilsTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
