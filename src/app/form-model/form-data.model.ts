import { CardData } from "./card-data.model";

export class FormData {

    cards: CardData[];
    submit: string = "Submit";
    readonly: boolean;

    constructor(cards: CardData[], readonly: boolean, submit?: string) {
        this.cards = cards;
        this.readonly = readonly;
        this.submit = submit;
    }
}
