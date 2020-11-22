import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsdetailsComponent } from './actorsdetails.component';

describe('ActorsdetailsComponent', () => {
  let component: ActorsdetailsComponent;
  let fixture: ComponentFixture<ActorsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
