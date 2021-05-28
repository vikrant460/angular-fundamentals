import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared'

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions!: ISession[]
    @Input() filterBy!:string
    @Input() visibleSessions: ISession[] = []
    @Input() sortBy!:string

    ngOnChanges() {
        if(this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortSession(this.sortBy)
        }
    }

    filterSessions(filterValue:string) {
        if(filterValue ==='all') {
            this.visibleSessions = this.sessions.slice(0)
        } 
        else {
            this.visibleSessions = this.sessions.filter(s=>{
                return s.level.toLocaleLowerCase() === this.filterBy
            })
        }
        
    }

    sortSession(sortBy: string) {
        if(sortBy == 'name') {
            this.visibleSessions = this.sessions.sort(sortByNameAsc)
        }
        else if(sortBy == 'votes') {
            this.visibleSessions = this.sessions.sort(sortyByVotesDesc)
        }
        
    }
}

function sortByNameAsc(session1:ISession, session2:ISession) {
    if(session1.name > session2.name) return 1
    else if(session1.name < session2.name) return -1
    else return 0
}

function sortyByVotesDesc(sesssion1:ISession, session2:ISession) {
    return session2.voters.length - sesssion1.voters.length
}