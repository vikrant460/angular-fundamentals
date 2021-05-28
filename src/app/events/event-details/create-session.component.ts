import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms'
import { ISession, restrictedWords } from '../shared'

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
    .error input { background-color:#E3C3C5;}
  `]
})
export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()

    newSessionForm!: FormGroup
    public sessionName!: FormControl
    public presenter!: FormControl
    public duration!: FormControl
    public level!: FormControl
    public abstract!: FormControl

    ngOnInit() {
        this.sessionName = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['test', 'foo'])])//TODO: fix to add restricted validator
        this.newSessionForm = new FormGroup({
            'sessionName': this.sessionName,
            'presenter': this.presenter,
            'duration': this.duration,
            'level': this.level,
            'abstract': this.abstract,

        })
    }

    onSaveSession(session: ISession) {
        console.log(session)
        this.saveNewSession.emit(session)
    }  

    onCancel() {
       this.cancelAddSession.emit()
    }
    
}