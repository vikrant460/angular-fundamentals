import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';
import { FormModel } from './model/form.model.base';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent<any>;
  let fixture: ComponentFixture<DynamicFormComponent<any>>;
  interface TestModel {
    firstname:string;
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormComponent);   
    component = fixture.componentInstance;
    component.input = new FormModel<TestModel>({model:{firstname:"Vikrant"},fieldSettings:[{key:"firstname"}]})
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
