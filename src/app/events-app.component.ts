import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>    
    <router-outlet></router-outlet>
  `,
  styles: [`
  .nav.navbar-nav { font-size: 15px }
  #searchForm { margin-right: 100px}
  `]
})

export class EventsAppComponent {
  title = 'ng-fundamentals';
}
