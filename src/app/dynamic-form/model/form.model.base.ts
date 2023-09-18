import { FormControl, FormGroup } from "@angular/forms";

export class FormModel<T> {
    value?:T;
    readonly formSettings: Array<FormSettings<T>>
    constructor(options: {model:T, fieldSettings :Array<FormSettings<T>>}) {
       this.formSettings = options.fieldSettings;
       this.value = options.model;
    }    
    
    toFormGroup() {
        const group: any = {};
    
        for(const key in this.value) {
    
          const p = this.getProperty(this.value, key)

          console.log(`Type of value in key is ${typeof p} whose value is ${p}`);
          console.log(JSON.stringify(p));
    
           group[key] = new FormControl(p);
        }
        return new FormGroup(group);
      }

      getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
        return obj[key];
      }

}


export interface FormSettings<T> {
    key : keyof T & string;
  }
