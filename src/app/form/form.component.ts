import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldData, FieldType } from '../form-model/field-data.model';
import { CardData } from '../form-model/card-data.model';
import { FormData } from '../form-model/form-data.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
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
      maxLength: 250,
      label: "Name",
      placeholder: "Name",
      smallText: "This is a small text for Name",
      help: "This is a help text for Name",
      options: null
    };
    this.fields.push(FieldData.fromJson(nameField));
    let lastnameField = {
      id: "lastnameId",
      name: "lastname",
      type: FieldType.TEXT,
      value: "Doe",
      isRequired: true,
      readonly: this.readonly,
      maxLength: 250,
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
      value: null,
      isRequired: true,
      readonly: this.readonly,
      maxLength: 250,
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
    let cards: CardData[] = [
      new CardData(this.fields, this.readonly, "This is a card header", "This is a card title", "This is a card text")
    ];
    this.formData = new FormData(cards, this.readonly, "Submit this!")
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
