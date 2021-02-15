import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ConfirmSubscriptionComponent } from './components/confirm-subscription/confirm-subscription.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentFailComponent } from './components/payment-fail/payment-fail.component';
import { RecommendedSubscriptionComponent } from './components/recommended-subscription/recommended-subscription.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            ConfirmSubscriptionComponent,
            PaymentSuccessComponent,
            PaymentFailComponent,
            RecommendedSubscriptionComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            AngularMaterialModule,
            BlockUIModule.forRoot({
                message: "Please wait...",
                delayStop: 500
            })
        ],
        exports: [
            CommonModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            AngularMaterialModule
        ],
        providers: [],
        entryComponents: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map