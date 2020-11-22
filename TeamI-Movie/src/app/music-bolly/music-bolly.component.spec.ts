import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicBollyComponent } from './music-bolly.component';

describe('MusicBollyComponent', () => {
  let component: MusicBollyComponent;
  let fixture: ComponentFixture<MusicBollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicBollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicBollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
