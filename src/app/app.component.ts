import { Component } from '@angular/core';
import { Person, User } from './person.model';
import { FormInput } from './dynamic-form/dynamic-form.component';
import { FormSettings, FormModel } from './dynamic-form/model/form.model.base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  color = '';
  model = {firstname:"adesh", lastname: "", age: 0}
  
  formsettings = new Array<FormSettings<User>>();

  constructor() {


  }
  input = new FormModel<User>({model: this.model, fieldSettings: [{key:"age"}]});
  submit(person:User){

    console.log(`Received output on parent. Age: ${person.age}`);
    console.log(JSON.stringify(person));
  }
}


