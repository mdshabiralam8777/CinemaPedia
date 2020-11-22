import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirDetailsBollyComponent } from './dir-details-bolly.component';

describe('DirDetailsBollyComponent', () => {
  let component: DirDetailsBollyComponent;
  let fixture: ComponentFixture<DirDetailsBollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirDetailsBollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirDetailsBollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
