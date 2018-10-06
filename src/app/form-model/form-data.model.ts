import { CardData } from "./card-data.model";
import { ButtonData } from "./button-data.model";

export class FormData {

    cards: CardData[];
    readonly: boolean;
    buttons: ButtonData[];

    constructor(cards: CardData[], buttons: ButtonData[], readonly: boolean) {
        this.cards = cards;
        this.buttons = buttons;
        this.readonly = readonly;
    }
}
