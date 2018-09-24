import { FormControl, Validators, ValidatorFn } from "@angular/forms";
import { Option } from "./option.model";

export enum FieldType {
    TEXT = 1,
    INTEGER = 2,
    DOUBLE = 3,
    CURRENCY = 4,
    EMAIL = 5,
    DATE = 6,
    SECRET = 7,
    RADIO = 8,
    DROPDOWN = 9,
    CHECK = 10,
    FILE = 11
}

export class FieldData extends FormControl {

    id: string;
    name: string;
    type: FieldType;
    value: string | number;
    isRequired: boolean;
    readonly: boolean;
    maxLength: number;
    label: string;
    placeholder: string;
    smallText: string;
    help: string;
    validators: ValidatorFn[];
    private _inputType: string;
    get inputType(): string { return this._inputType; };
    fieldClass: string = "form-control";
    containerClass: string = "form-group";
    options: Option[];

    constructor(id: string,
                name: string,
                type: FieldType,
                value: string | number,
                isRequired: boolean,
                readonly: boolean,
                maxLength: number,
                label: string,
                placeholder: string,
                smallText: string,
                help: string,
                options: Option[]) {
        super();
        this.id = id;
        this.name = name;
        this.type = type;
        this.value = value;
        this.isRequired = isRequired;
        this.readonly = readonly;
        this.maxLength = maxLength;
        this.label = label;
        this.placeholder = placeholder;
        this.smallText = smallText;
        this.help = help;
        this.options = options;

        this.initValidators();
        this.initInputType();
    }

    static fromJson(json: { id: string, name: string, type: FieldType, value: string | number, isRequired: boolean, readonly: boolean, maxLength: number, label: string, placeholder: string, smallText: string, help: string, options: Option[] }): FieldData {
        return new FieldData(json.id, json.name, json.type, json.value, json.isRequired, json.readonly, json.maxLength, json.label, json.placeholder, json.smallText, json.help, json.options);
    }

    private initValidators() {
        this.validators = [];
        if (this.isRequired === true) {
            this.validators.push(Validators.required);
        }
        if (this.maxLength) {
            this.validators.push(Validators.maxLength(this.maxLength));
        }
        switch (this.type) {
            case FieldType.INTEGER: {
                // TODO this.validators.push(IntegerValidator);
                break;
            }
            case FieldType.DOUBLE: {
                // TODO this.validators.push(DoubleValidator);
                break;
            }
            case FieldType.CURRENCY: {
                // TODO this.validators.push(CurrencyValidator);
                break;
            }
            case FieldType.EMAIL: {
                this.validators.push(Validators.email);
                break;
            }
            case FieldType.DATE: {
                // this.validators.push(DateValidator);
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
        this.setValidators(this.validators);
    }

    private initInputType() {
        switch (this.type) {
            case FieldType.TEXT: {
                this._inputType = "text";
                break;
            }
            case FieldType.INTEGER: {
                this._inputType = "number";
                break;
            }
            
            case FieldType.DOUBLE: {
                this._inputType = "number";
                break;
            }
            case FieldType.CURRENCY: {
                this._inputType = "number";
                break;
            }
            case FieldType.EMAIL: {
                this._inputType = "email";
                break;
            }
            case FieldType.DATE: {
                // TODO this._inputType = "email";
                break;
            }
            case FieldType.SECRET: {
                this._inputType = "password";
                break;
            }
            case FieldType.RADIO: {
                // this._inputType = "radio";
                break;
            }
            case FieldType.DROPDOWN: {
                break;
            }
            case FieldType.CHECK: {
                // TODO this._inputType = "";
                break;
            }
            case FieldType.FILE: {
                this._inputType = "file";
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
    }

}
