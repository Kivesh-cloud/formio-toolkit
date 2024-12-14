export const radioComponent = {
  type: 'radio',
  title: 'Radio',
  group: 'basic',
  icon: 'fa fa-dot-circle-o',
  selector: 'radio',
  template: `<div class="form-group">
    <label *ngIf="!component.hideLabel" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div [class.radio-inline]="component.inline">
      <div *ngFor="let option of component.values" class="radio">
        <label>
          <input type="radio"
                 [name]="component.key"
                 [value]="option.value"
                 [checked]="component.value === option.value"
                 [disabled]="component.disabled"
                 [required]="component.validate?.required"
                 [(ngModel)]="component.value"
                 (change)="onChange()">
          {{ option.label }}
        </label>
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
    description: {
      type: 'string',
      title: 'Description',
      description: 'The description is text that will appear below the radio group.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    values: {
      type: 'array',
      title: 'Values',
      description: 'The values available for selection.',
      items: {
        type: 'object',
        properties: {
          label: {
            type: 'string',
            title: 'Label'
          },
          value: {
            type: 'string',
            title: 'Value'
          }
        }
      }
    },
    inline: {
      type: 'boolean',
      title: 'Inline Layout',
      description: 'Display radio options inline.'
    },
    labelPosition: {
      type: 'string',
      title: 'Label Position',
      description: 'Position of the label relative to the radio button.',
      enum: ['left', 'right', 'top', 'bottom'],
      default: 'right'
    },
    optionsLabelPosition: {
      type: 'string',
      title: 'Options Label Position',
      description: 'Position of the labels for the radio options.',
      enum: ['left', 'right'],
      default: 'right'
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
    }
  },
  validation: {
    required: {
      type: 'boolean',
      title: 'Required',
      description: 'A required field must have a selection before the form can be submitted.'
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
    optionSpacing: '',
    labelColor: '',
    labelFontSize: '',
    labelFontWeight: ''
  },
  defaultValue: '',
  persistent: true,
  protected: false,
  autofocus: false,
  tabindex: '',
  dataGridLabel: true,
  labelWidth: 30,
  labelMargin: 3,
  name: ''
};
