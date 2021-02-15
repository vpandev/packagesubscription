import { HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserDto } from 'src/app/dtos/user-dto';
import { SubscriptionTypeEnum } from 'src/app/enums/subscription-type.enum';
import { ErrorsHandlingHelper } from 'src/app/helpers/errors-handling-helper';
import { PackageService } from 'src/app/services/package.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-confirm-subscription',
  templateUrl: './confirm-subscription.component.html',
  styleUrls: ['./confirm-subscription.component.css']
})
export class ConfirmSubscriptionComponent implements OnInit {

  user: any;
  showForm = false;

  myForm: FormGroup;
  getValidationMessage = ErrorsHandlingHelper.getValidationMessage;

  constructor(
    public dialogRef: MatDialogRef<ConfirmSubscriptionComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any,
    private packageService: PackageService,
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    var usr = sessionStorage.getItem('loggedUser');
    if (!!usr) {
      this.user = JSON.parse(usr) as UserDto;
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
      .subscribe((response: any) => {
        if (response.succeeded) {
          window.location = response.data;
        }

      }, (error) => {
        alert(error);
        this.dialogRef.close();
      })
  }

  cancel() {
    this.dialogRef.close();
  }

  calculateTotalPrice() {
    let params = new HttpParams();

    params = params.set('packageId', this.data.model.id);
    params = params.set('subscriptionType', this.data.subscriptionType);

    this.packageService.calculateTotalPrice(params)
      .subscribe((response: any) => {
        this.myForm.controls.amount.setValue(response);
        this.showForm = true;
      }, (error) => {
        alert(error);
        this.dialogRef.close();
      })
  }

}
