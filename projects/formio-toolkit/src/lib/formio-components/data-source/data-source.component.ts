export const dataSourceComponent = {
  type: 'data-source',
  title: 'Data Source',
  group: 'advanced',
  icon: 'fa fa-database',
  selector: 'data-source',
  template: `<div class="formio-data-source">
    <div class="data-source-loading" *ngIf="component.loading">
      <i class="fa fa-spinner fa-spin"></i> Loading...
    </div>
    <div class="data-source-error" *ngIf="component.error">
      <i class="fa fa-exclamation-triangle"></i> {{ component.error }}
    </div>
    <div class="data-source-content" *ngIf="!component.loading && !component.error">
      <div class="data-source-filters" *ngIf="component.showFilters">
        <div class="form-group" *ngFor="let filter of component.filters">
          <label>{{ filter.label }}</label>
          <input type="text" class="form-control" [(ngModel)]="filter.value" (input)="onFilterChange()">
        </div>
      </div>
      <div class="data-source-results">
        <table class="table" *ngIf="component.displayType === 'table'">
          <thead>
            <tr>
              <th *ngFor="let field of component.fields">{{ field.label }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of component.data">
              <td *ngFor="let field of component.fields">{{ item[field.key] }}</td>
            </tr>
          </tbody>
        </table>
        <ul class="list-group" *ngIf="component.displayType === 'list'">
          <li class="list-group-item" *ngFor="let item of component.data">
            {{ item[component.displayField] }}
          </li>
        </ul>
      </div>
      <div class="data-source-pagination" *ngIf="component.enablePagination">
        <button class="btn btn-default" [disabled]="component.currentPage === 1" (click)="prevPage()">
          <i class="fa fa-chevron-left"></i> Previous
        </button>
        <span>Page {{ component.currentPage }} of {{ component.totalPages }}</span>
        <button class="btn btn-default" [disabled]="component.currentPage === component.totalPages" (click)="nextPage()">
          Next <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>`,
  input: true,
  key: '',
  properties: {
    dataSource: {
      type: 'string',
      title: 'Data Source',
      description: 'The data source to connect to.',
      enum: ['url', 'values', 'json', 'custom', 'resource', 'sql']
    },
    url: {
      type: 'string',
      title: 'Data Source URL',
      description: 'The URL of the data source.'
    },
    method: {
      type: 'string',
      title: 'Request Method',
      description: 'The HTTP method to use.',
      enum: ['GET', 'POST', 'PUT', 'DELETE'],
      default: 'GET'
    },
    headers: {
      type: 'object',
      title: 'Headers',
      description: 'The headers to send with the request.'
    },
    values: {
      type: 'array',
      title: 'Values',
      description: 'The values for this data source.'
    },
    valueProperty: {
      type: 'string',
      title: 'Value Property',
      description: 'The property to use as the value.'
    },
    data: {
      type: 'object',
      title: 'Data',
      description: 'The data to use for this source.'
    },
    customQuery: {
      type: 'string',
      title: 'Custom Query',
      description: 'Custom query for this data source.'
    },
    filter: {
      type: 'string',
      title: 'Filter',
      description: 'Filter criteria for the data.'
    },
    sort: {
      type: 'string',
      title: 'Sort',
      description: 'Sort criteria for the data.'
    },
    limit: {
      type: 'number',
      title: 'Limit',
      description: 'Maximum number of items to return.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    refreshOn: {
      type: 'string',
      title: 'Refresh On',
      description: 'Field to watch for changes to refresh data.'
    },
    clearOnRefresh: {
      type: 'boolean',
      title: 'Clear on Refresh',
      description: 'Clear the value when the data source refreshes.'
    },
    authenticate: {
      type: 'boolean',
      title: 'Authenticate',
      description: 'Require authentication for this data source.'
    },
    validation: {
      required: false,
      custom: '',
      customPrivate: false
    },
    errorLabel: {
      type: 'string',
      title: 'Error Label',
      description: 'The label shown when an error occurs.'
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
    width: '',
    maxHeight: ''
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  dataSource: 'url',
  url: '',
  method: 'GET',
  headers: {},
  values: [],
  valueProperty: '',
  data: {},
  customQuery: '',
  filter: '',
  sort: '',
  limit: 100,
  refreshOn: '',
  clearOnRefresh: false,
  authenticate: false,
  multiple: false,
  tableView: true,
  modalEdit: false,
  persistent: true,
  unique: false,
  validateOn: 'change',
  errorMessage: '',
  customErrorMessage: '',
  dataSrc: 'url',
  selectValues: '',
  disableLimit: false,
  searchEnabled: true,
  searchField: '',
  searchDebounce: 300,
  lazyLoad: false,
  cacheRequests: false,
  requestHeaders: {},
  requestOptions: {},
  indexeddb: {
    filter: {}
  },
  useExactSearch: false
};
