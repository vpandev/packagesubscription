import { async, TestBed } from '@angular/core/testing';
import { ConfirmSubscriptionComponent } from './confirm-subscription.component';
describe('ConfirmSubscriptionComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmSubscriptionComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmSubscriptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=confirm-subscription.component.spec.js.map