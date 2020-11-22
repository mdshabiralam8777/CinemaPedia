import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsTollydetailsComponent } from './directors-tollydetails.component';

describe('DirectorsTollydetailsComponent', () => {
  let component: DirectorsTollydetailsComponent;
  let fixture: ComponentFixture<DirectorsTollydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorsTollydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsTollydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
