import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorsHandlingHelper } from 'src/app/helpers/errors-handling-helper';
let LoginComponent = class LoginComponent {
    constructor(userService, toastr, router) {
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.getValidationMessage = ErrorsHandlingHelper.getValidationMessage;
    }
    ngOnInit() {
        this.clearSessionStorage();
        this.myForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }
    clearSessionStorage() {
        var user = sessionStorage.getItem('loggedUser');
        if (!!user) {
            sessionStorage.removeItem('loggedUser');
        }
    }
    submit() {
        this.error = null;
        this.userService.loginUser(this.myForm.value)
            .subscribe((response) => {
            if (response) {
                this.toastr.open("Successfully logged user!", null, {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                });
                sessionStorage.setItem('loggedUser', JSON.stringify(response));
                this.router.navigate(['recommended-subscription']);
            }
        }, (error) => {
            this.error = error;
        });
    }
    reset() {
        this.error = null;
        this.myForm.reset();
        this.myForm.markAsUntouched();
    }
    handleSubmit(e) {
        e.preventDefault();
        this.submit();
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map