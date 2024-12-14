export const selectBoxComponent = {
  type: 'selectboxes',
  title: 'Select Boxes',
  group: 'basic',
  icon: 'fa fa-plus-square',
  selector: 'select-box',
  template: '<div class=\"form-group\"><div class=\"form-check\" *ngFor=\"let option of values\"><input type=\"checkbox\" class=\"form-check-input\" /><label class=\"form-check-label\"></label></div></div>',
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
      description: 'The description is text that will appear below the select boxes.'
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
          },
          shortcut: {
            type: 'string',
            title: 'Shortcut Key'
          }
        }
      }
    },
    inline: {
      type: 'boolean',
      title: 'Inline Layout',
      description: 'Display options inline.'
    },
    labelPosition: {
      type: 'string',
      title: 'Label Position',
      description: 'Position of the label relative to the checkboxes.',
      enum: ['left', 'right', 'top', 'bottom'],
      default: 'right'
    },
    optionsLabelPosition: {
      type: 'string',
      title: 'Options Label Position',
      description: 'Position of the labels for the options.',
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
      description: 'A required field must have at least one selection before the form can be submitted.'
    },
    minSelected: {
      type: 'number',
      title: 'Minimum Selected',
      description: 'The minimum number of options that must be selected.'
    },
    maxSelected: {
      type: 'number',
      title: 'Maximum Selected',
      description: 'The maximum number of options that can be selected.'
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
  defaultValue: {},
  persistent: true,
  protected: false,
  autofocus: false,
  tabindex: '',
  dataGridLabel: true,
  labelWidth: 30,
  labelMargin: 3,
  name: '',
  valueProperty: 'value'
};
