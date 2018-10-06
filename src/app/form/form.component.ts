import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldData } from '../form-model/field-data.model';
import { CardData } from '../form-model/card-data.model';
import { FormData } from '../form-model/form-data.model';
import { ButtonData } from '../form-model/button-data.model';
import { FieldType } from '../form-model/field-type.enum';
import { ButtonType } from '../form-model/button-type.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  formData: FormData;
  formGroup: FormGroup;
  fields: FieldData[];
  @Input('readonly') readonly: boolean;

  constructor() {
    this.fields = [];

    let nameField = {
      id: "nameId",
      name: "name",
      type: FieldType.TEXT,
      value: "John",
      isRequired: true,
      readonly: this.readonly,
      maxlength: 250,
      label: "Name",
      placeholder: "Name",
      smallText: "This is a small text for Name",
      help: "This is a help text for Name",
      options: null
    };
    this.fields.push(FieldData.fromJson(nameField));

    let integerField = {
      id: "integerId",
      name: "integer",
      type: FieldType.INTEGER,
      value: null,
      isRequired: true,
      readonly: this.readonly,
      maxlength: 10,
      label: "Integer",
      placeholder: "Integer",
      smallText: "This is a small text for Integer",
      help: "This is a help text for Integer",
      options: null
    };
    this.fields.push(FieldData.fromJson(integerField));

    let lastnameField = {
      id: "lastnameId",
      name: "lastname",
      type: FieldType.TEXT,
      value: "Doe",
      isRequired: true,
      readonly: this.readonly,
      maxlength: 250,
      label: "Last Name",
      placeholder: "Last Name",
      smallText: "This is a small text for Last Name",
      help: "This is a help text for Last Name",
      options: null
    };
    this.fields.push(FieldData.fromJson(lastnameField));

    let dropdownField = {
      id: "dropdownId",
      name: "dropdown",
      type: FieldType.DROPDOWN,
      value: 2,
      isRequired: true,
      readonly: this.readonly,
      maxlength: 250,
      label: "Dropdown",
      placeholder: "Dropdown",
      smallText: "This is a small text for Dropdown",
      help: "This is a help text for Dropdown",
      options: [{
        value: 1,
        label: "Spain"
      }, {
        value: 2,
        label: "France"
      }, {
        value: 3,
        label: "USA"
      }]
    };
    this.fields.push(FieldData.fromJson(dropdownField));

    let radioField = {
      id: "radioId",
      name: "radio",
      type: FieldType.RADIO,
      value: 2,
      isRequired: true,
      readonly: this.readonly,
      maxlength: 250,
      label: "Radio",
      placeholder: "Radio",
      smallText: "This is a small text for Radio",
      help: "This is a help text for Radio",
      options: [{
        value: 1,
        label: "Spain"
      }, {
        value: 2,
        label: "France"
      }, {
        value: 3,
        label: "USA"
      }]
    };
    this.fields.push(FieldData.fromJson(radioField));

    let checkField = {
      id: "checkId",
      name: "check",
      type: FieldType.CHECK,
      value: 2,
      isRequired: true,
      readonly: this.readonly,
      maxlength: 250,
      label: "Check",
      placeholder: "Check",
      smallText: "This is a small text for Check",
      help: "This is a help text for Check",
      options: [{
        value: 1,
        label: "Spain"
      }, {
        value: 2,
        label: "France"
      }, {
        value: 3,
        label: "USA"
      }]
    };
    this.fields.push(FieldData.fromJson(checkField));

    let dateField = {
      id: "dateId",
      name: "date",
      type: FieldType.DATE,
      value: "31/12/2018",
      isRequired: true,
      readonly: this.readonly,
      maxlength: 10,
      label: "Date",
      placeholder: "mm/dd/yyyy",
      smallText: "This is a small text for Date",
      help: "This is a help text for Date",
      options: null
    };
    this.fields.push(FieldData.fromJson(dateField));

    let defaultValuesField: FieldData = new FieldData("defaultValuesField");
    defaultValuesField.label = "Field with default values";
    this.fields.push(defaultValuesField);

    let fileField = {
      id: "fileId",
      name: "file",
      type: FieldType.FILE,
      value: null,
      isRequired: true,
      readonly: this.readonly,
      maxlength: null,
      label: "File",
      placeholder: "Choose a file",
      smallText: "This is a small text for File",
      help: "This is a help text for File",
      options: null
    };
    this.fields.push(FieldData.fromJson(fileField));

    let decimalField = {
      id: "decimalId",
      name: "decimal",
      type: FieldType.DECIMAL,
      value: null,
      isRequired: true,
      readonly: this.readonly,
      maxlength: 10,
      label: "Decimal",
      placeholder: "Decimal",
      smallText: "This is a small text for Decimal",
      help: "This is a help text for Decimal",
      options: null
    };
    this.fields.push(FieldData.fromJson(decimalField));

    let cards: CardData[] = [
      new CardData(this.fields, this.readonly, "This is a card header", "This is a card title", "This is a card text")
    ];

    let buttons: ButtonData[] = [];
    buttons.push(ButtonData.fromJson({ type: ButtonType.SUBMIT, text: "Submit" }));
    buttons.push(ButtonData.fromJson({ type: ButtonType.BUTTON, text: "Toggle Readonly Mode" }));

    this.formData = new FormData(cards, buttons, false);
    this.formGroup = new FormGroup({});
    this.formData.cards.forEach(card => {
      card.fields.forEach(field => {
        this.formGroup.addControl(field.name, field);
      })
    });
  }

  ngOnInit() {
    this.formData.readonly = this.readonly;
    this.initReadonlyMode();
  }

  initReadonlyMode() {
    if (this.formData.readonly) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
    this.formData.cards.forEach(card => {
      card.readonly = this.formData.readonly;
      card.fields.forEach(field => {
        field.readonly = this.formData.readonly;
      });
    });
  }

  toggleReadonly() {
    this.formData.readonly = !this.formData.readonly;
    this.initReadonlyMode();
  }

  onSubmit() {
    console.log(this.fields);
  }
}
