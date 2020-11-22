import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TollyComponent } from './tolly.component';

describe('TollyComponent', () => {
  let component: TollyComponent;
  let fixture: ComponentFixture<TollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
