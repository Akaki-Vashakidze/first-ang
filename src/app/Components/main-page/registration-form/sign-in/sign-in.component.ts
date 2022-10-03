import { Component, inject, OnInit } from '@angular/core';
import { ItemsService } from '../../../../items.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  admins: any;
  usersSignIn: any;
  users: object;

  constructor(
    private snackBar: MatSnackBar,
    public logInService: MatDialogRef<SignInComponent>,
    private signInService: ItemsService
  ) {}

  ngOnInit(): void {}

  signIn(username, pass, message, action) {
    this.admins = this.signInService.signIn.admins;
    this.usersSignIn = this.signInService.signIn.users;

    for (let i = 0; i < this.admins.length; i++) {
      console.log(this.admins[i].username, this.admins[i].pass);
      if (
        this.admins[i].username === username.value &&
        this.admins[i].pass === pass.value
      ) {
        this.logInService.close('closed111');
        this.snackBar.open(message + ' Admin', action, { duration: 2000 });
        this.signInService.logAdmin();
        return;
      }
    }

    for (let i = 0; i < this.usersSignIn.length; i++) {
      if (
        this.usersSignIn[i].username === username.value &&
        this.usersSignIn[i].pass === pass.value
      ) {
        this.logInService.close('closed111');
        this.snackBar.open(message + '  User', action, { duration: 2000 });
        this.signInService.logUser()
        return;
      }
    }

    this.snackBar.open(
      'Could not log in, username or password is incorrect',
      action,
      { duration: 2000 }
    );
  }
}
