import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockUI } from 'ng-block-ui';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
let PaymentService = class PaymentService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.baseUrl = 'http://localhost:64888/api';
    }
    createPayment(params) {
        this.blockUI.start();
        return this.http.get(this.baseUrl + '/CreatePayment?' + params.toString())
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
], PaymentService.prototype, "blockUI", void 0);
PaymentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PaymentService);
export { PaymentService };
//# sourceMappingURL=payment.service.js.map