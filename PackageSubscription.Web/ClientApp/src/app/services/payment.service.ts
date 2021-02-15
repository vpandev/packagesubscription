import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  @BlockUI() blockUI: NgBlockUI;

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:64888/api';
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  createPayment(params: any) {
    this.blockUI.start();
    return this.http.get(this.baseUrl + '/CreatePayment?' + params.toString())
      .pipe(
        tap(data => {

          this.blockUI.stop();
          return data;
        }),
        catchError(error => this.handleError(error)));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    this.blockUI.stop();
    return throwError(errorResponse.error);
  }
}
