import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirMollyComponent } from './dir-molly.component';

describe('DirMollyComponent', () => {
  let component: DirMollyComponent;
  let fixture: ComponentFixture<DirMollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirMollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirMollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
