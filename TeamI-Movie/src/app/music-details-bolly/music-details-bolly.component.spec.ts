import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDetailsBollyComponent } from './music-details-bolly.component';

describe('MusicDetailsBollyComponent', () => {
  let component: MusicDetailsBollyComponent;
  let fixture: ComponentFixture<MusicDetailsBollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicDetailsBollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDetailsBollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
