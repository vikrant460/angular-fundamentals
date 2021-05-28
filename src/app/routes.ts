import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service"
import { UserModule } from './user/user.module';
import { CreateSessionComponent } from './events';
//import { EventListResolverService } from './events/events-list.resolver.service';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['CanDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, /*resolve: { events: EventListResolverService }*/ },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    { path: '404', component: Error404Component},
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full'},    
    { 
        path: 'user',
        loadChildren: () => UserModule
    }
]