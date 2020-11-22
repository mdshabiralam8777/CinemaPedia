import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3BComponent } from './section3-b.component';

describe('Section3BComponent', () => {
  let component: Section3BComponent;
  let fixture: ComponentFixture<Section3BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section3BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section3BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
