import { Component, OnInit } from '@angular/core'
import { Form, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: '/profile.component.html' ,
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
    .error input { background-color:#E3C3C5;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm!:FormGroup
  public firstName!:FormControl
  public lastName!:FormControl
  
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
     this.firstName = new FormControl(this.authService.currentUser?.firstName, [Validators.required,
    Validators.pattern("[a-zA-z].*")])
    this.lastName = new FormControl(this.authService.currentUser?.lastName, Validators.required)
    this.profileForm = new FormGroup({
       'firstName': this.firstName,
       'lastName': this.lastName
    })
  }

  onCancel() {
    this.router.navigate(['events'])
  }

  onSaveProfile(formValues: any) {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events']);
    }
  }

  isValidFirstName() {
      return this.firstName.valid || this.firstName.untouched;
  }

  isValidLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

}