import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuypizzaComponent } from './buypizza.component';

describe('BuypizzaComponent', () => {
  let component: BuypizzaComponent;
  let fixture: ComponentFixture<BuypizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuypizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuypizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
