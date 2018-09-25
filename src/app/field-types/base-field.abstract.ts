import { Input, OnInit } from "@angular/core";
import { FieldData, FieldType } from "../form-model/field-data.model";
import { FormGroup } from "@angular/forms";

export abstract class BaseField implements OnInit {

  @Input('fieldData') fieldData: FieldData;
  @Input('formGroup') formGroup: FormGroup;
  @Input('readonly') readonly: boolean;
  fieldTypefieldType = FieldType;

  constructor() { }

  ngOnInit() {
    this.fieldData.readonly = this.readonly;
  }

}
