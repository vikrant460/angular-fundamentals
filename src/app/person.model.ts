export class Person {

    constructor(
      public firstname: string,
      public lastname: string
    ) {  }
  
  }
  export class FormBase<TModel> {
    value!: TModel;
  }

export interface User {
  age: number;
}

  export class PersonForm extends FormBase<Person> {

  }
