import { async, TestBed } from '@angular/core/testing';
import { PaymentSuccessComponent } from './payment-success.component';
describe('PaymentSuccessComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaymentSuccessComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentSuccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=payment-success.component.spec.js.map