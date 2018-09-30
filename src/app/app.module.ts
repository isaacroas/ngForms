import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { FieldComponent } from './field/field.component';
import { FieldTextComponent } from './field-types/field-text/field-text.component';
import { FieldDropdownComponent } from './field-types/field-dropdown/field-dropdown.component';
import { FieldRadioCheckComponent } from './field-types/field-radio-check/field-radio-check.component';
import { FieldFileComponent } from './field-types/field-file/field-file.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
    FieldComponent,
    FieldTextComponent,
    FieldDropdownComponent,
    FieldRadioCheckComponent,
    FieldFileComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
