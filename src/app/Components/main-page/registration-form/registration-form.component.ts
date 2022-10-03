import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  checkValidity = (
    name,
    lastName,
    username,
    gender,
    gmail,
    number,
    password1,
    password2
  ) => {
    if (name.value.length == 0) {
      this.snackBar.open('Name' + ' field must not be empty', 'close', {
        duration: 4000,
      });
      return;
    }
    if (lastName.value.length == 0) {
      this.snackBar.open('Lastname' + ' field must not be empty', 'close', {
        duration: 4000,
      });
      return;
    }
    if (username.value.length == 0) {
      this.snackBar.open('Username' + ' field must not be empty', 'close', {
        duration: 4000,
      });
      return;
    }
    if (!gender.value) {
      this.snackBar.open('Please select your gender', 'close', {
        duration: 4000,
      });
      return;
    }
    if (!gmail.value.split('').includes('@')) {
      this.snackBar.open('Please enter Gmail correctly', 'close', {
        duration: 4000,
      });
      return;
    }
    if (number.value.length < 9) {
      this.snackBar.open('Please enter Phone number correctly', 'close', {
        duration: 4000,
      });
      return;
    }
    if (password1.value < 5) {
      this.snackBar.open(
        'Password' + ' field number of letters must be greater than 5',
        'close',
        { duration: 4000 }
      );
      return;
    }
    if (password1.value != password2.value) {
      this.snackBar.open('Passwords does not match', 'close', {
        duration: 4000,
      });
      return;
    }
    this.snackBar.open('Conrgradulations! You have been registered!', 'close', {
      duration: 4000,
    });
    console.log(
      name.value,
      lastName.value,
      username.value,
      gmail.value,
      number.value,
      password1.value,
      password2.value
    );
  };

  constructor(private dialogRef: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  signUp = (
    name,
    lastName,
    username,
    gender,
    gmail,
    number,
    password1,
    password2
  ) => {
    this.checkValidity(
      name,
      lastName,
      username,
      gender,
      gmail,
      number,
      password1,
      password2
    );
  };

  signIn = () => {
    let dialogRef = this.dialogRef.open(SignInComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  };
}
