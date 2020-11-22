import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TollydetailsComponent } from './tollydetails.component';

describe('TollydetailsComponent', () => {
  let component: TollydetailsComponent;
  let fixture: ComponentFixture<TollydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TollydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TollydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
