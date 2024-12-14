export const progressComponent = {
  type: 'progress',
  title: 'Progress Bar',
  group: 'advanced',
  icon: 'fa fa-tasks',
  selector: 'progress',
  template: `<div class="progress-component">
    <label *ngIf="!component.hideLabel" class="control-label">
      {{ component.label }}
    </label>
    <div class="progress" [style.height.px]="component.height">
      <div class="progress-bar" 
           role="progressbar" 
           [ngClass]="getProgressClass()"
           [style.width.%]="component.value"
           [style.background-color]="component.color"
           [attr.aria-valuenow]="component.value"
           [attr.aria-valuemin]="0"
           [attr.aria-valuemax]="100">
        <span *ngIf="component.showPercentage">{{ component.value }}%</span>
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
    height: {
      type: 'number',
      title: 'Height',
      description: 'Height of the progress bar in pixels'
    },
    color: {
      type: 'string',
      title: 'Color',
      description: 'Color of the progress bar'
    },
    striped: {
      type: 'boolean',
      title: 'Striped',
      description: 'Show striped effect'
    },
    animated: {
      type: 'boolean',
      title: 'Animated',
      description: 'Show animation effect'
    },
    showPercentage: {
      type: 'boolean',
      title: 'Show Percentage',
      description: 'Show percentage value'
    },
    theme: {
      type: 'string',
      title: 'Theme',
      description: 'The theme of the progress bar',
      enum: ['default', 'success', 'info', 'warning', 'danger']
    }
  },
  style: {
    margin: '',
    borderRadius: '',
    backgroundColor: '',
    labelColor: '',
    labelFontSize: '',
    labelFontWeight: ''
  }
};
