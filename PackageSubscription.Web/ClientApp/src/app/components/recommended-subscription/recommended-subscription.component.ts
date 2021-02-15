import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PackageDto } from 'src/app/dtos/package-dto';
import { SubscriptionTypeEnum } from 'src/app/enums/subscription-type.enum';
import { PackageService } from 'src/app/services/package.service';
import { ConfirmSubscriptionComponent } from '../confirm-subscription/confirm-subscription.component';

@Component({
  selector: 'app-recommended-subscription',
  templateUrl: './recommended-subscription.component.html',
  styleUrls: ['./recommended-subscription.component.css']
})
export class RecommendedSubscriptionComponent implements OnInit {

  model: PackageDto;

  constructor(
    private packageService: PackageService,
    private dialog: MatDialog,
    private toastr: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getPackage();
  }

  getPackage() {
    this.packageService.getRecommendedPackage()
      .subscribe((response: any) => {
        if (response) {
          this.model = response as PackageDto;
        }
      }, (error) => {
        alert(error);
      })
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

  confirmSubscription(subscriptionType: number) {
    const data = { model: this.model, subscriptionType: subscriptionType }

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

}

