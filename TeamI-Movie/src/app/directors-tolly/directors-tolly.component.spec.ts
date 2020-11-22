import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsTollyComponent } from './directors-tolly.component';

describe('DirectorsTollyComponent', () => {
  let component: DirectorsTollyComponent;
  let fixture: ComponentFixture<DirectorsTollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorsTollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsTollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
