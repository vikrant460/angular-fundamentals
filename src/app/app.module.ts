import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { PasswordlengthdetectorDirective } from './passwordlengthdetector.directive';
import { CollapseBtnDirectiveDirective } from './collapse-btn-directive.directive';
import { CollapsePanelDirectiveDirective } from './collapse-panel-directive.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    PasswordlengthdetectorDirective,
    CollapseBtnDirectiveDirective,
    CollapsePanelDirectiveDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
