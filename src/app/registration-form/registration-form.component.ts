import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private dialogRef:MatDialog,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  signUp = (name,lastName,username,gmail,number,password1,password2) => {
    console.log(name.value,lastName.value,username.value,gmail.value,number.value,password1.value,password2.value)
  
    if(name.value.length == 0)  {
      console.log('oooo') 
     let snackBarRef = this.snackBar.open('Name field must not be empty', {duration:2000});
    }
  
  }

  signIn = () => {
    let dialogRef = this.dialogRef.open(SignInComponent,{})

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }
}
