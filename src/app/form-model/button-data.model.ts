import { ButtonType } from "./button-type.enum";

export class ButtonData {
    type: ButtonType = ButtonType.BUTTON;
    buttonClass: string = "btn btn-secondary";
    text: string = "";
    readonly: boolean;

    constructor(type?: ButtonType, text?: string) {
        this.type = type;
        this.text = text;
        this.initClass();
    }

    initClass() {
        switch (this.type) {
            case ButtonType.SUBMIT:
                this.buttonClass = "btn btn-primary";    
                break;
            case ButtonType.BUTTON:
                this.buttonClass = "btn btn-secondary";
                break;
            case ButtonType.LINK:
                this.buttonClass = "btn btn-link";
                break;
            default: 
                console.log("The class for the button type " + this.type + " is not implemented.");
        }
    }

    static fromJson(json: {type: ButtonType, text: string}): ButtonData {
        return new ButtonData(json.type, json.text);
    }
}
