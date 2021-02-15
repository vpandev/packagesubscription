import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockUI } from 'ng-block-ui';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.baseUrl = 'http://localhost:64888/api';
    }
    loginUser(formData) {
        this.blockUI.start();
        return this.http.post(this.baseUrl + '/LoginUser', formData)
            .pipe(tap(data => {
            this.blockUI.stop();
            return data;
        }), catchError(error => this.handleError(error)));
    }
    handleError(errorResponse) {
        this.blockUI.stop();
        return throwError(errorResponse.error);
    }
};
__decorate([
    BlockUI()
], UserService.prototype, "blockUI", void 0);
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map