import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaymentFailComponent } from './components/payment-fail/payment-fail.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { RecommendedSubscriptionComponent } from './components/recommended-subscription/recommended-subscription.component';
const routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'recommended-subscription', component: RecommendedSubscriptionComponent, pathMatch: 'full' },
    { path: 'payment-success', component: PaymentSuccessComponent, pathMatch: 'full' },
    { path: 'payment-fail', component: PaymentFailComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map