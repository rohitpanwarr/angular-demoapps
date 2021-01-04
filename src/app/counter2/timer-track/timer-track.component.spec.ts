import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTrackComponent } from './timer-track.component';

describe('TimerTrackComponent', () => {
  let component: TimerTrackComponent;
  let fixture: ComponentFixture<TimerTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
