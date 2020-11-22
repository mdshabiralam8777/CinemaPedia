import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirDetailsMollyComponent } from './dir-details-molly.component';

describe('DirDetailsMollyComponent', () => {
  let component: DirDetailsMollyComponent;
  let fixture: ComponentFixture<DirDetailsMollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirDetailsMollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirDetailsMollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
