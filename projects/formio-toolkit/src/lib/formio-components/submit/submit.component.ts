export const submitComponent = {
  type: 'submit',
  title: 'Submit',
  group: 'basic',
  icon: 'fa fa-paper-plane',
  selector: 'submit',
  template: `<div class="form-group">
    <button type="submit"
            class="btn"
            [ngClass]="getButtonClass()"
            [disabled]="component.disabled || component.loading"
            (click)="onSubmit($event)">
      <i *ngIf="component.leftIcon" [class]="component.leftIcon"></i>
      <span *ngIf="component.loading" class="glyphicon glyphicon-refresh glyphicon-spin"></span>
      {{ component.label }}
      <i *ngIf="component.rightIcon" [class]="component.rightIcon"></i>
    </button>
    <div class="help-block" *ngIf="component.description">
      {{ component.description }}
    </div>
    <div class="alert alert-danger" *ngIf="component.error">
      {{ component.error }}
    </div>
  </div>`,
  input: false,
  key: 'submit',
  properties: {
    action: {
      type: 'string',
      title: 'Action',
      description: 'Button action (submit, reset, event)',
      enum: ['submit', 'reset', 'event']
    },
    theme: {
      type: 'string',
      title: 'Theme',
      description: 'The theme of the button',
      enum: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link']
    },
    size: {
      type: 'string',
      title: 'Size',
      description: 'The size of the button',
      enum: ['xs', 'sm', 'md', 'lg']
    },
    leftIcon: {
      type: 'string',
      title: 'Left Icon',
      description: 'The icon to display to the left of the button text'
    },
    rightIcon: {
      type: 'string',
      title: 'Right Icon',
      description: 'The icon to display to the right of the button text'
    },
    block: {
      type: 'boolean',
      title: 'Block',
      description: 'Make the button span the full width'
    },
    disableOnInvalid: {
      type: 'boolean',
      title: 'Disable on Form Invalid',
      description: 'Disable this button if the form is invalid'
    },
    saveOnEnter: {
      type: 'boolean',
      title: 'Save on Enter',
      description: 'Trigger the submit when pressing the Enter key'
    }
  },
  style: {
    margin: '',
    padding: '',
    'font-size': '',
    'font-weight': '',
    color: '',
    'background-color': '',
    'border-color': '',
    'border-width': '',
    'border-radius': '',
    'box-shadow': '',
    width: '',
    height: '',
    'min-width': '',
    'max-width': ''
  }
};
