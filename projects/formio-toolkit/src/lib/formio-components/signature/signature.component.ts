export const signatureComponent = {
  type: 'signature',
  title: 'Signature',
  group: 'advanced',
  icon: 'fa fa-pencil',
  selector: 'signature',
  template: `<div class="form-group signature-component" [ngClass]="{'has-error': component.error}">
    <label *ngIf="!component.hideLabel" [attr.for]="component.key" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div class="signature-pad-wrapper" 
         [style.width.px]="component.width"
         [style.height.px]="component.height">
      <canvas class="signature-pad"
              [id]="component.key + '-pad'"
              [style.background-color]="component.backgroundColor"
              [width]="component.width"
              [height]="component.height">
      </canvas>
      <div class="signature-pad-footer" *ngIf="component.footer || component.actions">
        <span class="signature-pad-footer-label" *ngIf="component.footer">
          {{ component.footer }}
        </span>
        <div class="signature-pad-actions">
          <button type="button" 
                  class="btn btn-sm btn-default clear-button" 
                  (click)="clearSignature()"
                  [disabled]="component.disabled || !hasSignature">
            <i class="fa fa-eraser"></i> Clear
          </button>
          <button type="button"
                  class="btn btn-sm btn-default download-button"
                  (click)="downloadSignature()"
                  [disabled]="component.disabled || !hasSignature">
            <i class="fa fa-download"></i> Download
          </button>
        </div>
      </div>
    </div>
    <div class="signature-pad-prompt" *ngIf="!hasSignature">
      {{ component.placeholder || 'Click or touch here to sign' }}
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
    width: {
      type: 'number',
      title: 'Width',
      description: 'The width of the signature area.'
    },
    height: {
      type: 'number',
      title: 'Height',
      description: 'The height of the signature area.'
    },
    backgroundColor: {
      type: 'string',
      title: 'Background Color',
      description: 'The background color of the signature area.'
    },
    penColor: {
      type: 'string',
      title: 'Pen Color',
      description: 'The color of the signature line.'
    },
    lineWidth: {
      type: 'number',
      title: 'Line Width',
      description: 'The width of the signature line.'
    },
    minWidth: {
      type: 'number',
      title: 'Minimum Width',
      description: 'The minimum width of a line.'
    },
    maxWidth: {
      type: 'number',
      title: 'Maximum Width',
      description: 'The maximum width of a line.'
    },
    velocityFilterWeight: {
      type: 'number',
      title: 'Velocity Weight',
      description: 'Weight used to modify velocity.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    footer: {
      type: 'string',
      title: 'Footer Label',
      description: 'Label displayed under the signature area.'
    },
    placeholder: {
      type: 'string',
      title: 'Placeholder',
      description: 'Placeholder text when signature is empty.'
    },
    tooltip: {
      type: 'string',
      title: 'Tooltip',
      description: 'Tooltip for the signature pad.'
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
    borderWidth: '',
    borderStyle: '',
    borderColor: '',
    borderRadius: '',
    boxShadow: ''
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  width: 400,
  height: 150,
  backgroundColor: 'rgb(245,245,235)',
  penColor: 'black',
  lineWidth: 0.5,
  minWidth: 0.5,
  maxWidth: 2.5,
  velocityFilterWeight: 0.7,
  footer: '',
  placeholder: '',
  tooltip: '',
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
  saveAs: 'image',
  downloadButton: false,
  showDate: false,
  datePicker: {
    minDate: null,
    maxDate: null,
    showWeeks: true,
    startingDay: 0,
    initDate: '',
    minMode: 'day',
    maxMode: 'year',
    yearRows: 4,
    yearColumns: 5
  }
};
