import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardData } from '../form-model/card-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input('cardData') cardData: CardData;
  @Input('formGroup') formGroup: FormGroup;
  @Input('readonly') readonly: boolean;

  constructor() { }

  ngOnInit() {
    if (this.cardData.readonly === undefined) {
      this.cardData.readonly = this.readonly;
    }
  }

}
