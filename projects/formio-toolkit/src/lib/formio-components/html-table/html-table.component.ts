export const htmlTableComponent = {
  type: 'html-table',
  title: 'HTML Table',
  group: 'layout',
  icon: 'fa fa-table',
  selector: 'html-table',
  template: `<div class="formio-html-table">
    <table class="{{ component.customClass }} {{ component.striped ? 'table-striped' : '' }} {{ component.bordered ? 'table-bordered' : '' }} {{ component.hover ? 'table-hover' : '' }} {{ component.condensed ? 'table-condensed' : '' }} {{ component.responsive ? 'table-responsive' : '' }}">
      <caption *ngIf="component.caption">{{ component.caption }}</caption>
      <thead *ngIf="component.header && component.header.length">
        <tr>
          <th *ngFor="let cell of component.header" style="text-align: {{ component.cellAlignment }}">{{ cell }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of component.rows">
          <td *ngFor="let cell of row" style="text-align: {{ component.cellAlignment }}">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
    <div *ngIf="component.pagination.enabled" class="table-pagination">
      <div class="pagination-controls">
        <button [disabled]="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button [disabled]="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>`,
  input: false,
  key: '',
  properties: {
    numRows: {
      type: 'number',
      title: 'Number of Rows',
      description: 'The number of rows in the table.',
      default: 3
    },
    numCols: {
      type: 'number',
      title: 'Number of Columns',
      description: 'The number of columns in the table.',
      default: 3
    },
    caption: {
      type: 'string',
      title: 'Caption',
      description: 'The caption for this table.'
    },
    header: {
      type: 'array',
      title: 'Header Cells',
      description: 'The header cells of the table.'
    },
    striped: {
      type: 'boolean',
      title: 'Striped Rows',
      description: 'Add zebra-striping to table rows.'
    },
    bordered: {
      type: 'boolean',
      title: 'Bordered',
      description: 'Add borders on all sides of the table and cells.'
    },
    hover: {
      type: 'boolean',
      title: 'Hover',
      description: 'Enable hover state on table rows.'
    },
    condensed: {
      type: 'boolean',
      title: 'Condensed',
      description: 'Make table more compact by cutting cell padding in half.'
    },
    responsive: {
      type: 'boolean',
      title: 'Responsive',
      description: 'Make table responsive across all viewports.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    cellAlignment: {
      type: 'string',
      title: 'Cell Alignment',
      description: 'The default alignment for table cells.',
      enum: ['left', 'center', 'right'],
      default: 'left'
    },
    cellPadding: {
      type: 'number',
      title: 'Cell Padding',
      description: 'The padding for table cells.'
    },
    cellSpacing: {
      type: 'number',
      title: 'Cell Spacing',
      description: 'The spacing between table cells.'
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
    borderWidth: '',
    borderStyle: '',
    borderColor: '',
    borderRadius: '',
    headerBackgroundColor: '',
    headerTextColor: '',
    headerBorderColor: '',
    rowBackgroundColor: '',
    rowAlternateBackgroundColor: '',
    rowHoverBackgroundColor: '',
    cellBorderColor: '',
    fontSize: '',
    fontFamily: ''
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  rows: [],
  numRows: 3,
  numCols: 3,
  cloneRows: false,
  layoutFixed: false,
  tableView: false,
  modalEdit: false,
  defaultValue: [],
  tabindex: '',
  autofocus: false,
  reorder: false,
  cellAlignment: 'left',
  addAnotherPosition: 'bottom',
  defaultOpen: false,
  enableRowGroups: false,
  initEmpty: false,
  hideAddButton: false,
  manageColumns: false,
  cellEditing: {
    enabled: false,
    mode: 'click',
    allowHTML: false
  },
  rowSelection: {
    enabled: false,
    mode: 'single',
    selectedClass: 'selected'
  },
  sorting: {
    enabled: false,
    mode: 'single',
    ignoreCase: true
  },
  pagination: {
    enabled: false,
    perPage: 10,
    showPageSizes: true,
    position: 'bottom'
  }
};
