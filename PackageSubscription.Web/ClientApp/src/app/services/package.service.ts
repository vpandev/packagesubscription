import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PackageSubscribeDto } from '../dtos/package-subscribe-dto';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

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

  getRecommendedPackage() {
    this.blockUI.start();

    return this.http.get(this.baseUrl + '/GetRecommendedPackage')
      .pipe(
        tap(data => {
          this.blockUI.stop();
          return data;
        }),
        catchError(error => this.handleError(error)));
  }

  subscribeForPackage(formData: PackageSubscribeDto) {
    this.blockUI.start();

    return this.http.post(this.baseUrl + '/SubscribeForPackage', formData)
      .pipe(
        tap(data => {
          this.blockUI.stop();
          return data;
        }),
        catchError(error => this.handleError(error)));
  }

  calculateTotalPrice(params: any) {
    this.blockUI.start();

    return this.http.get(this.baseUrl + '/CalculateTotalPrice?' + params.toString())
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
