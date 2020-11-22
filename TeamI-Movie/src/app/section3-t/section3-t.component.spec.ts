import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3TComponent } from './section3-t.component';

describe('Section3TComponent', () => {
  let component: Section3TComponent;
  let fixture: ComponentFixture<Section3TComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section3TComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section3TComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
