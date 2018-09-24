import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardData } from '../form-model/card-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('cardData') cardData: CardData;
  @Input('formGroup') formGroup: FormGroup;
  @Input('readonly') readonly: boolean;

  constructor() { }

  ngOnInit() {
    this.cardData.readonly = this.readonly;
  }

}
