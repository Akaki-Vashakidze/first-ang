import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLastTripCardComponent } from './full-last-trip-card.component';

describe('FullLastTripCardComponent', () => {
  let component: FullLastTripCardComponent;
  let fixture: ComponentFixture<FullLastTripCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullLastTripCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullLastTripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
