import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingOfferingComponent } from './greeting-offering.component';

describe('GreetingOfferingComponent', () => {
  let component: GreetingOfferingComponent;
  let fixture: ComponentFixture<GreetingOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingOfferingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
