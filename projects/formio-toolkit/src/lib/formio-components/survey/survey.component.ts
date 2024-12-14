export const surveyComponent = {
  type: 'survey',
  title: 'Survey',
  group: 'advanced',
  icon: 'fa fa-list',
  selector: 'survey',
  template: `<div class="form-group survey-component" [ngClass]="{'has-error': component.error}">
    <label *ngIf="!component.hideLabel" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div class="survey-table-wrapper">
      <table class="table survey-table" [class.table-striped]="component.striped">
        <thead>
          <tr>
            <th [style.width]="component.questionWidth"></th>
            <th *ngFor="let value of component.values" [style.width]="getValueWidth()">
              {{ value.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let question of component.questions; let i = index">
            <td>
              <label [attr.for]="component.key + '-' + i" [class]="getLabelClass()">
                {{ question.label }}
              </label>
            </td>
            <td *ngFor="let value of component.values; let j = index" class="survey-value">
              <input type="radio"
                     [id]="component.key + '-' + i + '-' + j"
                     [name]="component.key + '-' + i"
                     [value]="value.value"
                     [disabled]="component.disabled"
                     [(ngModel)]="component.value[question.value]"
                     (change)="onChange()">
            </td>
          </tr>
        </tbody>
      </table>
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
    questions: {
      type: 'array',
      title: 'Questions',
      description: 'The questions in the survey.'
    },
    values: {
      type: 'array',
      title: 'Values',
      description: 'The values that can be selected for each question.'
    },
    defaultValue: {
      type: 'object',
      title: 'Default Value',
      description: 'The default values for questions.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    tabindex: {
      type: 'number',
      title: 'Tab Index',
      description: 'Sets the tabindex attribute of this component.'
    },
    inline: {
      type: 'boolean',
      title: 'Inline Layout',
      description: 'Displays the radio buttons horizontally.'
    },
    labelPosition: {
      type: 'string',
      title: 'Label Position',
      description: 'Position of the label relative to the element.',
      enum: ['top', 'left', 'right', 'bottom'],
      default: 'top'
    },
    labelWidth: {
      type: 'number',
      title: 'Label Width',
      description: 'The width of the label in percentage.'
    },
    labelMargin: {
      type: 'number',
      title: 'Label Margin',
      description: 'The margin between label and element.'
    },
    description: {
      type: 'string',
      title: 'Description',
      description: 'The description text for this survey.'
    },
    tooltip: {
      type: 'string',
      title: 'Tooltip',
      description: 'Tooltip for the survey.'
    },
    errorLabel: {
      type: 'string',
      title: 'Error Label',
      description: 'The label shown when an error occurs.'
    },
    validation: {
      required: false,
      custom: '',
      customPrivate: false
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
    }
  },
  style: {
    margin: '',
    padding: '',
    backgroundColor: '',
    color: '',
    borderWidth: '',
    borderStyle: '',
    borderColor: '',
    borderRadius: '',
    boxShadow: '',
    fontSize: '',
    fontFamily: '',
    questionColor: '',
    answerColor: '',
    selectedColor: '',
    headerBackgroundColor: '',
    rowBackgroundColor: '',
    alternateRowBackgroundColor: ''
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  questions: [],
  values: [],
  defaultValue: {},
  inline: false,
  labelPosition: 'top',
  labelWidth: 30,
  labelMargin: 3,
  description: '',
  tooltip: '',
  tabindex: '',
  multiple: false,
  tableView: true,
  modalEdit: false,
  persistent: true,
  unique: false,
  validateOn: 'change',
  errorMessage: '',
  customErrorMessage: '',
  validate: {
    required: false,
    custom: '',
    customPrivate: false
  },
  rowStyles: false,
  autoAdjust: true,
  questionSize: 'md',
  answerSize: 'md'
};
