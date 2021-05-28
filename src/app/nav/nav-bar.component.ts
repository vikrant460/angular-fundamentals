import {Component} from '@angular/core'
import { AuthService } from '../user/auth.service';


@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        li> a.active { color: #F97924}
    `]
})
export class NavBarComponent {
    constructor(public authService: AuthService) {

    }
}