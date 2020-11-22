import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirTollyComponent } from './dir-tolly.component';

describe('DirTollyComponent', () => {
  let component: DirTollyComponent;
  let fixture: ComponentFixture<DirTollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirTollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirTollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
