import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
let HomeComponent = class HomeComponent {
    constructor(dialog, toastr) {
        this.dialog = dialog;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    login() {
        const dialogRef = this.dialog.open(LoginComponent, {
            width: '400px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (result) {
                    this.toastr.open("Successfully logged user!", null, {
                        duration: 5000,
                        verticalPosition: 'bottom',
                        horizontalPosition: 'right',
                    });
                    //  TODO:Redirect to package offer
                }
            }
        });
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map