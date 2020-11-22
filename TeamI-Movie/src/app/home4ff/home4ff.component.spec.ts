import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4ffComponent } from './home4ff.component';

describe('Home4ffComponent', () => {
  let component: Home4ffComponent;
  let fixture: ComponentFixture<Home4ffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home4ffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home4ffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
