import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent, ISession } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; paddint-right: 20px}
        .event-img {  height: 100px; }
        a { cursor:pointer; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: any
    addMode!: boolean
    filterBy:string = 'all'
    sortBy:string ='votes'
    

    constructor(private eventService: EventService, private route: ActivatedRoute) {
        
    }
    
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params["id"])
    }

    addSession() {
        this.addMode = true
    }

    onSaveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map((s:ISession)=>s.id))
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    onCancelAddSession() {
        console.log('cancel session event is emitted')
        this.addMode = false
    }

}