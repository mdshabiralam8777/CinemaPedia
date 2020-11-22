import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDetailsMollyComponent } from './music-details-molly.component';

describe('MusicDetailsMollyComponent', () => {
  let component: MusicDetailsMollyComponent;
  let fixture: ComponentFixture<MusicDetailsMollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicDetailsMollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDetailsMollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
