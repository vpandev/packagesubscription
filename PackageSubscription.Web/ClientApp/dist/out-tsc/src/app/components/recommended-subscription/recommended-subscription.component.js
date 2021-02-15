import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SubscriptionTypeEnum } from 'src/app/enums/subscription-type.enum';
import { ConfirmSubscriptionComponent } from '../confirm-subscription/confirm-subscription.component';
let RecommendedSubscriptionComponent = class RecommendedSubscriptionComponent {
    constructor(packageService, dialog, toastr) {
        this.packageService = packageService;
        this.dialog = dialog;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.getPackage();
    }
    getPackage() {
        this.packageService.getRecommendedPackage()
            .subscribe((response) => {
            if (response) {
                this.model = response;
            }
        }, (error) => {
            alert(error);
        });
    }
    getImageUrl() {
        return "../../../assets/images/" + this.model.packageType + ".jfif";
    }
    subscribeMonthly() {
        this.confirmSubscription(SubscriptionTypeEnum.Monthly);
    }
    subscribeAnnual() {
        this.confirmSubscription(SubscriptionTypeEnum.Annual);
    }
    confirmSubscription(subscriptionType) {
        const data = { model: this.model, subscriptionType: subscriptionType };
        const dialogRef = this.dialog.open(ConfirmSubscriptionComponent, {
            width: '500px',
            disableClose: true,
            data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.toastr.open("Successfully subscribed!", null, {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                });
            }
        });
    }
};
RecommendedSubscriptionComponent = __decorate([
    Component({
        selector: 'app-recommended-subscription',
        templateUrl: './recommended-subscription.component.html',
        styleUrls: ['./recommended-subscription.component.css']
    })
], RecommendedSubscriptionComponent);
export { RecommendedSubscriptionComponent };
//# sourceMappingURL=recommended-subscription.component.js.map