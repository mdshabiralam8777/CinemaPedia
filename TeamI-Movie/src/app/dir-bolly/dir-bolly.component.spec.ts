import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirBollyComponent } from './dir-bolly.component';

describe('DirBollyComponent', () => {
  let component: DirBollyComponent;
  let fixture: ComponentFixture<DirBollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirBollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirBollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
