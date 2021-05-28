import { Component, OnInit } from '@angular/core'
import { Router} from '@angular/router'
import { EventService, IEvent } from './shared'


@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
    .error input { background-color:#E3C3C5;}
  `]
})
export class CreateEventComponent implements OnInit {
    isDirty:boolean = true //hardcoded for testing
    newEvent!: IEvent

    constructor(private router: Router, private eventService: EventService) {

    }

    ngOnInit() {
        this.newEvent = {
            id: 1,
            name: "ng Binding",
            price: 100,
            date: new Date('04/10/2021'),
            time:"10:00 am",
            location: {
                address: "Hiranandani",
                city: "Mumbai",
                country: "India"
            },
            imageUrl: "www.test.com/test.png",
            sessions: [],
            onlineUrl: "www.test.com"
        }
    }

    handleCancel() {
        this.router.navigate(['/events'])
    }

    saveEvent(formValues: any) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel() {

    }

}