export const textFieldComponent = {
  type: 'text-field',
  title: 'Text Field',
  group: 'basic',
  icon: 'fa fa-terminal',
  selector: 'text-field',
  template: `<div class="form-group">
    <label *ngIf="!component.hideLabel" [attr.for]="component.key" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div class="input-group">
      <div class="input-group-addon" *ngIf="component.prefix">
        {{ component.prefix }}
      </div>
      <input [type]="component.inputType || 'text'"
             [id]="component.key"
             class="form-control"
             [name]="component.key"
             [placeholder]="component.placeholder"
             [required]="component.validate?.required"
             [minlength]="component.validate?.minLength"
             [maxlength]="component.validate?.maxLength"
             [pattern]="component.validate?.pattern"
             [disabled]="component.disabled"
             [readonly]="component.readonly"
             [(ngModel)]="component.value"
             (input)="onChange()"
             (blur)="onBlur()">
      <div class="input-group-addon" *ngIf="component.suffix">
        {{ component.suffix }}
      </div>
    </div>
    <div class="help-block" *ngIf="component.description">
      {{ component.description }}
    </div>
    <div class="alert alert-danger" *ngIf="component.error">
      {{ component.error }}
    </div>
  </div>`,
  input: true,
  key: '',
  properties: {
    label: {
      type: 'string',
      title: 'Label',
      description: 'The label for this field.'
    },
    placeholder: {
      type: 'string',
      title: 'Placeholder',
      description: 'The placeholder text that will appear when this field is empty.'
    },
    description: {
      type: 'string',
      title: 'Description',
      description: 'The description is text that will appear below the input field.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    prefix: {
      type: 'string',
      title: 'Prefix',
      description: 'The text to show before the input.'
    },
    suffix: {
      type: 'string',
      title: 'Suffix',
      description: 'The text to show after the input.'
    },
    multiple: {
      type: 'boolean',
      title: 'Multiple Values',
      description: 'Allow multiple values to be entered for this field.'
    },
    hidden: {
      type: 'boolean',
      title: 'Hidden',
      description: 'A boolean value that will hide/show this component.'
    },
    hideLabel: {
      type: 'boolean',
      title: 'Hide Label',
      description: 'Hide the label of this component.'
    },
    disabled: {
      type: 'boolean',
      title: 'Disabled',
      description: 'Disable this component.'
    },
    tableView: {
      type: 'boolean',
      title: 'Table View',
      description: 'Show this component in table view.'
    },
    clearOnHide: {
      type: 'boolean',
      title: 'Clear on Hide',
      description: 'Clear the value when this component is hidden.'
    }
  },
  validation: {
    required: {
      type: 'boolean',
      title: 'Required',
      description: 'A required field must be filled in before the form can be submitted.'
    },
    minLength: {
      type: 'number',
      title: 'Minimum Length',
      description: 'The minimum length requirement this field must meet.'
    },
    maxLength: {
      type: 'number',
      title: 'Maximum Length',
      description: 'The maximum length requirement this field must meet.'
    },
    pattern: {
      type: 'string',
      title: 'Pattern',
      description: 'The regular expression pattern test that the field value must pass before the form can be submitted.'
    },
    customMessage: {
      type: 'string',
      title: 'Custom Error Message',
      description: 'Custom error message displayed when validation fails.'
    }
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  style: {
    margin: '',
    padding: '',
    color: '',
    backgroundColor: '',
    borderWidth: '',
    borderStyle: '',
    borderColor: '',
    borderRadius: ''
  },
  defaultValue: '',
  persistent: true,
  protected: false,
  unique: false,
  autofocus: false,
  tabindex: '',
  mask: false,
  maskOptions: {},
  spellcheck: true,
  autocomplete: ''
};
