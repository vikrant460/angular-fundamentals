import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventListResolverService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
 } from './events/index'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent} from './nav/nav-bar.component';
import { ToastrService} from './common/toastr.service';
import { CollapsibleWellComponent} from './common/collapsible-well.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [ 
    EventService, 
    ToastrService, 
    EventRouteActivatorService,
    EventListResolverService,
    AuthService,
    { 
      provide: 'CanDeactivateCreateEvent', 
      useValue: checkDirtyState
    } 
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { 
  
}

export function checkDirtyState(component: CreateEventComponent) {
  
   if(component.isDirty)
    window.confirm('You have not saved the event. Do you still want to cancel?')
    
    return true
}
