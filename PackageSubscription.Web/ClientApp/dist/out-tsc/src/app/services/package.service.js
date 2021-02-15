import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockUI } from 'ng-block-ui';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
let PackageService = class PackageService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.baseUrl = 'http://localhost:64888/api';
    }
    getRecommendedPackage() {
        this.blockUI.start();
        return this.http.get(this.baseUrl + '/GetRecommendedPackage')
            .pipe(tap(data => {
            this.blockUI.stop();
            return data;
        }), catchError(error => this.handleError(error)));
    }
    subscribeForPackage(formData) {
        this.blockUI.start();
        return this.http.post(this.baseUrl + '/SubscribeForPackage', formData)
            .pipe(tap(data => {
            this.blockUI.stop();
            return data;
        }), catchError(error => this.handleError(error)));
    }
    calculateTotalPrice(params) {
        this.blockUI.start();
        return this.http.get(this.baseUrl + '/CalculateTotalPrice?' + params.toString())
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
], PackageService.prototype, "blockUI", void 0);
PackageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PackageService);
export { PackageService };
//# sourceMappingURL=package.service.js.map