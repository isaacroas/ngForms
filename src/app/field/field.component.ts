import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldData } from '../form-model/field-data.model';
import { FieldType } from '../form-model/field-type.enum';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html'
})
export class FieldComponent implements OnInit {

  @Input('fieldData') fieldData: FieldData;
  @Input('formGroup') formGroup: FormGroup;
  @Input('readonly') readonly: boolean;
  fieldType = FieldType;

  constructor() { }

  ngOnInit() {
    if (this.fieldData.readonly === undefined) {
      this.fieldData.readonly = this.readonly;
    }
  }

}
