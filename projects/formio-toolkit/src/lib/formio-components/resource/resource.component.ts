export const resourceComponent = {
  type: 'resource',
  title: 'Resource',
  group: 'advanced',
  icon: 'fa fa-files-o',
  selector: 'resource',
  template: `<div class="formio-resource">
    <div class="resource-loading" *ngIf="component.loading">
      <i class="fa fa-spinner fa-spin"></i> Loading resources...
    </div>
    <div class="resource-error" *ngIf="component.error">
      <i class="fa fa-exclamation-triangle"></i> {{ component.error }}
    </div>
    <div class="resource-content" *ngIf="!component.loading && !component.error">
      <div class="resource-search" *ngIf="component.searchEnabled">
        <div class="input-group">
          <input type="text" 
                 class="form-control" 
                 [(ngModel)]="component.searchQuery"
                 placeholder="{{ component.searchPlaceholder }}"
                 (input)="onSearch()">
          <span class="input-group-addon">
            <i class="fa fa-search"></i>
          </span>
        </div>
      </div>
      <div class="resource-select" *ngIf="component.selectMode === 'dropdown'">
        <select class="form-control" [(ngModel)]="component.value" (change)="onChange()">
          <option value="">{{ component.placeholder }}</option>
          <option *ngFor="let item of component.resources" [value]="item[component.valueProperty]">
            {{ item[component.displayProperty] }}
          </option>
        </select>
      </div>
      <div class="resource-radio" *ngIf="component.selectMode === 'radio'">
        <div class="radio" *ngFor="let item of component.resources">
          <label>
            <input type="radio" 
                   [name]="component.key" 
                   [value]="item[component.valueProperty]"
                   [(ngModel)]="component.value"
                   (change)="onChange()">
            {{ item[component.displayProperty] }}
          </label>
        </div>
      </div>
      <div class="resource-list" *ngIf="component.selectMode === 'list'">
        <ul class="list-group">
          <li class="list-group-item" 
              *ngFor="let item of component.resources"
              [class.active]="isSelected(item)"
              (click)="selectItem(item)">
            {{ item[component.displayProperty] }}
          </li>
        </ul>
      </div>
      <div class="resource-pagination" *ngIf="component.pagination.enabled">
        <ul class="pagination">
          <li [class.disabled]="component.currentPage === 1">
            <a href="#" (click)="prevPage($event)">
              <i class="fa fa-chevron-left"></i>
            </a>
          </li>
          <li *ngFor="let page of getPages()" [class.active]="page === component.currentPage">
            <a href="#" (click)="goToPage($event, page)">{{ page }}</a>
          </li>
          <li [class.disabled]="component.currentPage === component.totalPages">
            <a href="#" (click)="nextPage($event)">
              <i class="fa fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>`,
  input: true,
  key: '',
  properties: {
    resource: {
      type: 'string',
      title: 'Resource',
      description: 'The resource to load.'
    },
    resourceUrl: {
      type: 'string',
      title: 'Resource URL',
      description: 'The URL of the resource.'
    },
    selectFields: {
      type: 'array',
      title: 'Select Fields',
      description: 'The fields to select from the resource.'
    },
    searchField: {
      type: 'string',
      title: 'Search Field',
      description: 'Field to search within.'
    },
    filter: {
      type: 'string',
      title: 'Filter Query',
      description: 'The filter query for this resource.'
    },
    limit: {
      type: 'number',
      title: 'Limit',
      description: 'Maximum number of items to return.'
    },
    searchEnabled: {
      type: 'boolean',
      title: 'Enable Search',
      description: 'Enable searching within resource.'
    },
    searchDebounce: {
      type: 'number',
      title: 'Search Debounce',
      description: 'The delay in milliseconds before searching.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    template: {
      type: 'string',
      title: 'Item Template',
      description: 'The template for displaying selected item.'
    },
    refreshOn: {
      type: 'string',
      title: 'Refresh On',
      description: 'Field to watch for changes to refresh data.'
    },
    clearOnRefresh: {
      type: 'boolean',
      title: 'Clear Value On Refresh',
      description: 'Clear the value when the resource refreshes.'
    },
    searchQuery: {
      type: 'string',
      title: 'Search Query',
      description: 'The query parameters to add to the search request.'
    },
    authenticate: {
      type: 'boolean',
      title: 'Authenticate',
      description: 'Require authentication before accessing the resource.'
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
  resource: '',
  resourceUrl: '',
  selectFields: [],
  searchField: '',
  filter: '',
  limit: 100,
  searchEnabled: true,
  searchDebounce: 300,
  refreshOn: '',
  clearOnRefresh: false,
  searchQuery: '',
  authenticate: false,
  multiple: false,
  tableView: true,
  modalEdit: false,
  persistent: true,
  unique: false,
  validateOn: 'change',
  errorMessage: '',
  customErrorMessage: '',
  dataSrc: 'resource',
  valueProperty: '',
  lazyLoad: false,
  selectValues: '',
  disableLimit: false,
  searchThreshold: 0.3,
  fuseOptions: {
    include: ['score'],
    threshold: 0.3,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: []
  }
};
