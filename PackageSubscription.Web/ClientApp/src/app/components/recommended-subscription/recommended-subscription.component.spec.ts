import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedSubscriptionComponent } from './recommended-subscription.component';

describe('RecommendedSubscriptionComponent', () => {
  let component: RecommendedSubscriptionComponent;
  let fixture: ComponentFixture<RecommendedSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
