import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core'
import { IUser } from './user.model';



@Injectable()
export class AuthService {
    currentUser!: IUser
    userName: any

    loginUser(userName:string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: "Vikrant",
            lastName: "Yadav"
        }
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    updateCurrentUser(firstName:string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}