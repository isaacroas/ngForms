import { FieldData } from "./field-data.model";

export class CardData {

    fields: FieldData[];
    readonly: boolean;
    header: string;
    title: string;
    text: string;

    constructor(fields: FieldData[], readonly: boolean, header?: string, title?: string, text?: string) {
        this.fields = fields;
        this.readonly = readonly;
        this.header = header;
        this.title = title;
        this.text = text;
    }
    
}
