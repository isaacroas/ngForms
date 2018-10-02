import { Component, Input } from '@angular/core';
import { BaseField } from '../base-field.abstract';
import { FieldType } from '../../form-model/field-type.enum';

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html'
})
export class FieldTextComponent extends BaseField {

  @Input() type: FieldType;

  onKeyPress($event: KeyboardEvent): boolean {
    /* console.log("char:" + $event.char);
    console.log("charCode" + $event.charCode);
    console.log("key: " + $event.key);
    console.log("keyCode: " + $event.keyCode); */
    let result: boolean;
    switch (this.type) {
      case FieldType.INTEGER:
        result = this.onKeyPressInteger($event);
        break;
      default:
        result = true;
        break;
    }
    return result;
  }

  onKeyPressInteger($event: KeyboardEvent): boolean {
    if ($event.keyCode < 48 || $event.keyCode > 57) {
      return false;
    } else {
      return true;
    }
  }

  onPaste($event: ClipboardEvent) {
    if (!this.isInteger($event.clipboardData.getData('text/plain'))) {
      $event.preventDefault();
    }
  }

  private isInteger(value: any): boolean {
    if (isNaN(value)) {
      return false;
    } else if (parseFloat(value) !== parseInt(value)) {
      return false;
    }
    return true;
  }

}