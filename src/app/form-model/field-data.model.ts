import { FormControl, Validators, ValidatorFn } from "@angular/forms";
import { Option } from "./option.model";
import { FieldType } from "./field-type.enum";

export class FieldData extends FormControl {

    id: string;
    name: string;
    type: FieldType = FieldType.TEXT;
    value: string | number;
    isRequired: boolean = false;
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
    radioItemClass: string = "form-check form-check-inline";
    fileContainerClass: string = "custom-file";
    fileInputClass: string = "custom-file-input";
    fileLabelClass: string = "custom-file-label";

    constructor(name: string,
        value?: string | number,
        label?: string,
        type?: FieldType,
        isRequired?: boolean,
        readonly?: boolean,
        maxLength?: number,
        placeholder?: string,
        id?: string,
        smallText?: string,
        help?: string,
        options?: Option[]) {
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

        if (!this.id) {
            this.id = this.name;
        }

        this.initValidators();
        this.initInputType();
        this.initClass();
    }

    static fromJson(json: { name: string, id: string, type: FieldType, value: string | number, isRequired: boolean, readonly: boolean, maxLength: number, label: string, placeholder: string, smallText: string, help: string, options: Option[] }): FieldData {
        return new FieldData(json.name, json.value, json.label, json.type, json.isRequired, json.readonly, json.maxLength, json.placeholder, json.id, json.smallText, json.help, json.options);
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
                this._inputType = "date";
                break;
            }
            case FieldType.SECRET: {
                this._inputType = "password";
                break;
            }
            case FieldType.RADIO: {
                this._inputType = "radio";
                break;
            }
            case FieldType.DROPDOWN: {
                break;
            }
            case FieldType.CHECK: {
                this._inputType = "checkbox";
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

    initClass() {
        if (FieldType.RADIO === this.type || FieldType.CHECK === this.type) {
            this.fieldClass = "form-check-input";
        }
    }

}
