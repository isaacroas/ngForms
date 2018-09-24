import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldData, FieldType } from '../form-model/field-data.model';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input('fieldData') fieldData: FieldData;
  @Input('formGroup') formGroup: FormGroup;
  @Input('readonly') readonly: boolean;
  fieldType = FieldType;

  constructor() { }

  ngOnInit() {
    this.fieldData.readonly = this.readonly;
  }

}
