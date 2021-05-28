import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html',
    styles: [`
      em { float:right; color:#E05C65; padding-left:10px;}
    `]
})
export class LoginComponent {
    userName: any
    password: any
    isMouseOverLogin!:boolean
    

    constructor(private authService: AuthService, private router: Router) {

    }

    onLogin(formValues: any) {
        console.log(formValues)
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    onCancel() {
        this.router.navigate(['events'])
    }
}