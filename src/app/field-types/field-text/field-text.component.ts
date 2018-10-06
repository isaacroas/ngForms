import { Component, Input } from '@angular/core';
import { BaseField } from '../base-field.abstract';
import { FieldType } from '../../form-model/field-type.enum';
import { UtilService } from '../../util/util.service';

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html'
})
export class FieldTextComponent extends BaseField {

  @Input() type: FieldType;

  constructor(private utilService: UtilService) {
    super();
  }

  onKeyPress($event: KeyboardEvent): boolean {
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
    if (!this.utilService.isInteger($event.clipboardData.getData('text/plain'))) {
      $event.preventDefault();
    }
  }

}