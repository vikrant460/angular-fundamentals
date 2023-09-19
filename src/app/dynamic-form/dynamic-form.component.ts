import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../person.model';
import { FormModel } from './model/form.model.base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent<T> implements OnInit{
  value : any;

  name = new FormControl('');

  @Input()
  input! : FormModel<T>;
  form!: FormGroup;
  fields = new Array<string>();
  
  constructor() {
    console.log("ctor is called")
    console.log(...this.fields)
  }

  ngOnInit(): void {
    this.form = this.input.toFormGroup();
  }

  onSubmit() {
    this.value = JSON.stringify(this.getModelFromInput());
    console.log(this.value);
  }

  getModelFromInput() {
    const output: any = {};

    for(const fs of this.input.formSettings) {

      output[fs.key] =this.form.get(fs.key)?.value
    }
    return output;
  }
}


export class FormInput<Model> {
   model?: Model;
   fields? : string[];

  constructor(options: {model?: Model, fields?:string[]} = {}) {
   this.model = options.model;
   this.fields = options.fields;
  }
  
  toFormGroup() {
    const group: any = {};

    for(const key in this.model) {

      const p = this.getProperty(this.model, key)
      
      console.log(JSON.stringify(p));

       group[key] = new FormControl(p);
    }
    return new FormGroup(group);
  }
  
  getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
  
}



































































































































































































































