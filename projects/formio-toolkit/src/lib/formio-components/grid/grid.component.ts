export const gridComponent = {
  type: 'grid',
  title: 'Grid',
  group: 'layout',
  icon: 'fa fa-th-large',
  selector: 'grid',
  template: `<div class="formio-grid">
    <div class="row" *ngFor="let row of component.rows">
      <div *ngFor="let col of row" 
           [class]="getColumnClass(col)"
           [style.minHeight]="component.minHeight">
        <formio-component
          *ngFor="let component of col.components"
          [component]="component"
          (onChange)="onComponentChange($event)">
        </formio-component>
      </div>
    </div>
  </div>`,
  input: false,
  key: '',
  properties: {
    rows: {
      type: 'array',
      title: 'Rows',
      description: 'The rows of the grid with their columns and components'
    },
    minHeight: {
      type: 'string',
      title: 'Minimum Height',
      description: 'The minimum height for grid cells'
    },
    equalCols: {
      type: 'boolean',
      title: 'Equal Column Heights',
      description: 'Make all columns in a row equal height'
    },
    numRows: {
      type: 'number',
      title: 'Number of Rows',
      description: 'The number of rows in the grid.',
      default: 3
    },
    numCols: {
      type: 'number',
      title: 'Number of Columns',
      description: 'The number of columns in the grid.',
      default: 3
    },
    gutter: {
      type: 'number',
      title: 'Gutter Width',
      description: 'The width of the gutter between grid cells.'
    },
    cellMinHeight: {
      type: 'number',
      title: 'Cell Minimum Height',
      description: 'The minimum height for grid cells.'
    },
    equalHeight: {
      type: 'boolean',
      title: 'Equal Height Cells',
      description: 'Make all cells in the grid equal height.'
    },
    responsive: {
      type: 'boolean',
      title: 'Responsive',
      description: 'Make grid responsive across all viewports.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    cellAlignment: {
      type: 'string',
      title: 'Cell Alignment',
      description: 'The default alignment for grid cells.',
      enum: ['start', 'center', 'end', 'stretch'],
      default: 'stretch'
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
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  style: {
    margin: '',
    padding: '',
    backgroundColor: '',
    columnGap: '',
    rowGap: '',
    gridGap: '',
    gridAutoFlow: '',
    gridTemplateColumns: '',
    gridTemplateRows: '',
    gridAutoColumns: '',
    gridAutoRows: '',
    justifyItems: '',
    alignItems: '',
    justifyContent: '',
    alignContent: '',
    borderWidth: '',
    borderStyle: '',
    borderColor: '',
    borderRadius: '',
    boxShadow: ''
  },
  components: [],
  numRows: 3,
  numCols: 3,
  cellMinHeight: 100,
  gutter: 10,
  autoAdjust: true,
  tableView: false,
  modalEdit: false,
  defaultValue: [],
  tabindex: '',
  autofocus: false,
  reorder: false,
  addAnotherPosition: 'bottom',
  defaultOpen: false,
  layoutFixed: false,
  enableRowGroups: false,
  initEmpty: false,
  hideAddButton: false,
  manageColumns: false,
  responsiveColumns: {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};
