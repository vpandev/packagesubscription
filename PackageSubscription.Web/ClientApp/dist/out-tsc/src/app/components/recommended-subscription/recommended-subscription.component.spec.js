import { async, TestBed } from '@angular/core/testing';
import { RecommendedSubscriptionComponent } from './recommended-subscription.component';
describe('RecommendedSubscriptionComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecommendedSubscriptionComponent]
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
//# sourceMappingURL=recommended-subscription.component.spec.js.map