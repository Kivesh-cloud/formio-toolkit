export const selectComponent = {
  type: 'select',
  title: 'Select',
  group: 'basic',
  icon: 'fa fa-th-list',
  selector: 'select',
  template: `<div class="form-group" [ngClass]="{'has-error': component.error}">
    <label *ngIf="!component.hideLabel" [attr.for]="component.key" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div [ngClass]="{'input-group': component.prefix || component.suffix}">
      <div class="input-group-addon" *ngIf="component.prefix">
        {{ component.prefix }}
      </div>
      <select [id]="component.key"
              class="form-control"
              [name]="component.key"
              [required]="component.validate?.required"
              [disabled]="component.disabled"
              [readonly]="component.readonly"
              [multiple]="component.multiple"
              [(ngModel)]="component.value"
              (change)="onChange()"
              (blur)="onBlur()">
        <option value="" *ngIf="component.placeholder">{{ component.placeholder }}</option>
        <option *ngFor="let option of component.data.values" 
                [value]="option.value"
                [selected]="isSelected(option.value)">
          {{ option.label }}
        </option>
      </select>
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
    multiple: {
      type: 'boolean',
      title: 'Multiple',
      description: 'Allow multiple selections'
    },
    dataSrc: {
      type: 'string',
      title: 'Data Source Type',
      description: 'The type of data source to use',
      enum: ['values', 'json', 'url', 'resource', 'custom']
    },
    data: {
      type: 'object',
      title: 'Data',
      description: 'The data to use for options',
      properties: {
        values: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              label: { type: 'string' },
              value: { type: 'string' }
            }
          }
        },
        json: { type: 'string' },
        url: { type: 'string' },
        resource: { type: 'string' },
        custom: { type: 'string' }
      }
    },
    valueProperty: {
      type: 'string',
      title: 'Value Property',
      description: 'The property to use as the value'
    },
    labelProperty: {
      type: 'string',
      title: 'Label Property',
      description: 'The property to use as the label'
    },
    searchEnabled: {
      type: 'boolean',
      title: 'Enable Search',
      description: 'Enable searching through options'
    },
    searchField: {
      type: 'string',
      title: 'Search Field',
      description: 'The field to search against'
    },
    minSearch: {
      type: 'number',
      title: 'Minimum Search Length',
      description: 'The minimum length before searching'
    },
    readOnlyValue: {
      type: 'boolean',
      title: 'Read Only Value',
      description: 'Show only the value when in read only mode'
    },
    authenticate: {
      type: 'boolean',
      title: 'Authenticate',
      description: 'Require authentication for API requests'
    },
    template: {
      type: 'string',
      title: 'Template',
      description: 'The template for rendering items'
    },
    refreshOn: {
      type: 'string',
      title: 'Refresh On',
      description: 'Field to watch for refresh'
    },
    clearOnRefresh: {
      type: 'boolean',
      title: 'Clear on Refresh',
      description: 'Clear value on refresh'
    },
    prefix: {
      type: 'string',
      title: 'Prefix',
      description: 'The prefix text to show before the select'
    },
    suffix: {
      type: 'string',
      title: 'Suffix',
      description: 'The suffix text to show after the select'
    }
  },
  style: {
    margin: '',
    width: '',
    'max-width': '',
    'min-width': '',
    height: '',
    'font-size': '',
    'font-weight': '',
    color: '',
    'background-color': '',
    'border-color': '',
    'border-width': '',
    'border-radius': ''
  }
};
