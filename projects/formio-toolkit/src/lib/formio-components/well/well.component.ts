export const wellComponent = {
  type: 'well',
  title: 'Well',
  group: 'layout',
  icon: 'fa fa-square-o',
  selector: 'well',
  template: `<div class="well" 
                 [ngClass]="component.customClass"
                 [style.background-color]="component.backgroundColor"
                 [style.padding]="component.padding"
                 [style.margin]="component.margin"
                 [style.border-radius]="component.borderRadius">
    <div class="well-header" *ngIf="component.title">
      <h3>{{ component.title }}</h3>
    </div>
    <div class="well-content">
      <formio-component
        *ngFor="let component of component.components"
        [component]="component"
        (onChange)="onComponentChange($event)">
      </formio-component>
    </div>
  </div>`,
  input: false,
  key: '',
  components: [],
  properties: {
    title: {
      type: 'string',
      title: 'Title',
      description: 'Title of the well'
    },
    theme: {
      type: 'string',
      title: 'Theme',
      description: 'The theme of the well',
      enum: ['default', 'primary', 'success', 'info', 'warning', 'danger']
    },
    size: {
      type: 'string',
      title: 'Size',
      description: 'The size of the well',
      enum: ['sm', 'md', 'lg']
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this well'
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
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  style: {
    margin: '',
    padding: '',
    backgroundColor: '',
    borderWidth: '',
    borderStyle: '',
    borderColor: '',
    borderRadius: '',
    boxShadow: ''
  },
  theme: {
    variant: 'default',
    customBackground: '',
    customText: ''
  }
};
