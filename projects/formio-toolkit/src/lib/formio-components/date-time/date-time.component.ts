export const dateTimeComponent = {
  type: 'date-time',
  title: 'Date/Time',
  group: 'advanced',
  icon: 'fa fa-calendar',
  selector: 'date-time',
  template: `<div class="form-group">
    <label *ngIf="!component.hideLabel" [attr.for]="component.key" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div class="input-group">
      <input [type]="component.enableTime ? 'datetime-local' : 'date'"
             [id]="component.key"
             class="form-control"
             [name]="component.key"
             [placeholder]="component.placeholder"
             [required]="component.validate?.required"
             [min]="component.validate?.minDate"
             [max]="component.validate?.maxDate"
             [disabled]="component.disabled"
             [readonly]="component.readonly"
             [(ngModel)]="component.value"
             (input)="onChange()"
             (blur)="onBlur()">
      <div class="input-group-addon" *ngIf="component.enableTime">
        <i class="fa fa-clock-o"></i>
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
      description: 'The description is text that will appear below the input field.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    enableTime: {
      type: 'boolean',
      title: 'Enable Time',
      description: 'Enable time selection.'
    },
    format: {
      type: 'string',
      title: 'Date Format',
      description: 'The format for displaying the date.',
      default: 'yyyy-MM-dd'
    },
    timezone: {
      type: 'string',
      title: 'Timezone',
      description: 'The timezone for the date.'
    },
    datepickerMode: {
      type: 'string',
      title: 'Datepicker Mode',
      description: 'The mode of the datepicker.',
      enum: ['day', 'month', 'year'],
      default: 'day'
    },
    hourStep: {
      type: 'number',
      title: 'Hour Step',
      description: 'The step for hours in the time picker.',
      default: 1
    },
    minuteStep: {
      type: 'number',
      title: 'Minute Step',
      description: 'The step for minutes in the time picker.',
      default: 1
    },
    secondStep: {
      type: 'number',
      title: 'Second Step',
      description: 'The step for seconds in the time picker.',
      default: 1
    },
    showWeeks: {
      type: 'boolean',
      title: 'Show Weeks',
      description: 'Show week numbers.'
    },
    startingDay: {
      type: 'number',
      title: 'Starting Day',
      description: 'The starting day of the week (0=Sunday, 1=Monday, etc).',
      min: 0,
      max: 6,
      default: 0
    },
    minDate: {
      type: 'string',
      title: 'Minimum Date',
      description: 'The minimum date that can be selected.'
    },
    maxDate: {
      type: 'string',
      title: 'Maximum Date',
      description: 'The maximum date that can be selected.'
    },
    placeholder: {
      type: 'string',
      title: 'Placeholder',
      description: 'The placeholder text that will appear when this field is empty.'
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
      description: 'A required field must be filled in before the form can be submitted.'
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
    borderRadius: '',
    calendarWidth: '',
    timeWidth: ''
  },
  defaultValue: '',
  persistent: true,
  protected: false,
  autofocus: false,
  tabindex: '',
  suffix: '',
  prefix: '',
  widget: {
    type: 'calendar',
    format: 'yyyy-MM-dd',
    saveAs: 'text',
    displayInTimezone: 'viewer',
    locale: 'en',
    useLocaleSettings: false,
    allowInput: true,
    mode: 'single',
    enableTime: false,
    noCalendar: false,
    format24h: false,
    minDate: null,
    maxDate: null,
    defaultDate: null,
    hourIncrement: 1,
    minuteIncrement: 1,
    time_24hr: false,
    minTime: null,
    maxTime: null,
    weekNumbers: false,
    disable: [],
    enable: []
  }
};
