import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3MComponent } from './section3-m.component';

describe('Section3MComponent', () => {
  let component: Section3MComponent;
  let fixture: ComponentFixture<Section3MComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section3MComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section3MComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
