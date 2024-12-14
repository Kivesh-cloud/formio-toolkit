export const checkboxComponent = {
  type: 'checkbox',
  title: 'Checkbox',
  group: 'basic',
  icon: 'fa fa-check-square',
  selector: 'checkbox',
  template: `<div class="form-group">
    <div class="checkbox">
      <label [class.checkbox-inline]="component.inline">
        <input type="checkbox"
               [id]="component.key"
               [name]="component.key"
               [checked]="component.value"
               [disabled]="component.disabled"
               [required]="component.validate?.required"
               [(ngModel)]="component.value"
               (change)="onChange()">
        <span [class.field-required]="component.validate?.required">
          {{ component.label }}
        </span>
      </label>
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
    description: {
      type: 'string',
      title: 'Description',
      description: 'The description is text that will appear below the checkbox.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    labelPosition: {
      type: 'string',
      title: 'Label Position',
      description: 'Position of the label relative to the checkbox.',
      enum: ['left', 'right', 'top', 'bottom'],
      default: 'right'
    },
    value: {
      type: 'string',
      title: 'Value',
      description: 'The value when checked.'
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
    },
    defaultValue: {
      type: 'boolean',
      title: 'Default Value',
      description: 'The default value of the checkbox.'
    }
  },
  validation: {
    required: {
      type: 'boolean',
      title: 'Required',
      description: 'A required field must be checked before the form can be submitted.'
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
    size: 'md',
    labelColor: '',
    labelFontSize: '',
    labelFontWeight: ''
  },
  persistent: true,
  protected: false,
  autofocus: false,
  tabindex: '',
  dataGridLabel: true,
  labelWidth: 30,
  labelMargin: 3,
  name: ''
};
