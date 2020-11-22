import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirDetailsTollyComponent } from './dir-details-tolly.component';

describe('DirDetailsTollyComponent', () => {
  let component: DirDetailsTollyComponent;
  let fixture: ComponentFixture<DirDetailsTollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirDetailsTollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirDetailsTollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
