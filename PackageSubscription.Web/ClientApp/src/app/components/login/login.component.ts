import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorsHandlingHelper } from 'src/app/helpers/errors-handling-helper';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  getValidationMessage = ErrorsHandlingHelper.getValidationMessage;

  error: string;

  constructor(
    private userService: UserService,
    private toastr: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.clearSessionStorage()

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
      .subscribe((response: any) => {
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
      })
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
}
