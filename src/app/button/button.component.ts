import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonData } from '../form-model/button-data.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input('buttonData') buttonData: ButtonData;
  @Input('formGroup') formGroup: FormGroup;
  @Input('readonly') readonly: boolean;

  constructor() { }

  ngOnInit() {
    if (this.buttonData.readonly === undefined) {
      this.buttonData.readonly = this.readonly;
    }
  }

}
