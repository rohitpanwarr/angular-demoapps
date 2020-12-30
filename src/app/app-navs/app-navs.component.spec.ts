import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavsComponent } from './app-navs.component';

describe('AppNavsComponent', () => {
  let component: AppNavsComponent;
  let fixture: ComponentFixture<AppNavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNavsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
