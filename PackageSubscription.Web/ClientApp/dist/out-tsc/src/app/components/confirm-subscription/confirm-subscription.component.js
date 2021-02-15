import { __decorate, __param } from "tslib";
import { HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionTypeEnum } from 'src/app/enums/subscription-type.enum';
import { ErrorsHandlingHelper } from 'src/app/helpers/errors-handling-helper';
let ConfirmSubscriptionComponent = class ConfirmSubscriptionComponent {
    constructor(dialogRef, data, packageService, paymentService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.packageService = packageService;
        this.paymentService = paymentService;
        this.showForm = false;
        this.getValidationMessage = ErrorsHandlingHelper.getValidationMessage;
    }
    ngOnInit() {
        var usr = sessionStorage.getItem('loggedUser');
        if (!!usr) {
            this.user = JSON.parse(usr);
        }
        var subscriptionName = this.data.subscriptionType == SubscriptionTypeEnum.Monthly ? "Monthly" : "Annual";
        var price = this.data.subscriptionType == SubscriptionTypeEnum.Monthly ? this.data.model.monthlyPrice : this.data.model.annualPrice;
        this.myForm = new FormGroup({
            id: new FormControl(0),
            userId: new FormControl(this.user.id, [Validators.required]),
            username: new FormControl(this.user.username, [Validators.required]),
            packageId: new FormControl(this.data.model.id, [Validators.required]),
            packageName: new FormControl(this.data.model.name, [Validators.required]),
            subscriptionType: new FormControl(this.data.subscriptionType, [Validators.required]),
            subscriptionTypName: new FormControl(subscriptionName, [Validators.required]),
            price: new FormControl(price, [Validators.required]),
            amount: new FormControl('', [Validators.required])
        });
        this.calculateTotalPrice();
    }
    confirm() {
        // this.packageService.subscribeForPackage(this.myForm.value)
        //   .subscribe((response: any) => {
        //     this.dialogRef.close(response);
        //   }, (error) => {
        //     alert(error);
        //     this.dialogRef.close();
        //   })
        let params = new HttpParams();
        params = params.set('userId', this.myForm.controls.userId.value);
        params = params.set('packageId', this.myForm.controls.packageId.value);
        params = params.set('subscriptionType', this.myForm.controls.subscriptionType.value);
        params = params.set('amount', this.myForm.controls.amount.value);
        this.paymentService.createPayment(params)
            .subscribe((response) => {
            if (response.succeeded) {
                window.location = response.data;
            }
        }, (error) => {
            alert(error);
            this.dialogRef.close();
        });
    }
    cancel() {
        this.dialogRef.close();
    }
    calculateTotalPrice() {
        let params = new HttpParams();
        params = params.set('packageId', this.data.model.id);
        params = params.set('subscriptionType', this.data.subscriptionType);
        this.packageService.calculateTotalPrice(params)
            .subscribe((response) => {
            this.myForm.controls.amount.setValue(response);
            this.showForm = true;
        }, (error) => {
            alert(error);
            this.dialogRef.close();
        });
    }
};
ConfirmSubscriptionComponent = __decorate([
    Component({
        selector: 'app-confirm-subscription',
        templateUrl: './confirm-subscription.component.html',
        styleUrls: ['./confirm-subscription.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], ConfirmSubscriptionComponent);
export { ConfirmSubscriptionComponent };
//# sourceMappingURL=confirm-subscription.component.js.map