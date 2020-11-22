import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicMollyComponent } from './music-molly.component';

describe('MusicMollyComponent', () => {
  let component: MusicMollyComponent;
  let fixture: ComponentFixture<MusicMollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicMollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicMollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
