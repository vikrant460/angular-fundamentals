import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared';

@Component({
    template: `
    <div>
        <h1>Upcoming Events<h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5" >
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event" ></event-thumbnail>
            </div>
        </div>
    <div>`
})
export class EventsListComponent implements OnInit {
    events: IEvent[]

    constructor(private eventService : EventService, private toastrService : ToastrService, 
        private router: ActivatedRoute){
        this.events = []
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(events => this.events = events)
    }

    handleThumbnailClick(eventName:any) {
        this.toastrService.success(eventName)
    }
}