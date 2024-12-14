export const panelComponent = {
  type: 'panel',
  title: 'Panel',
  group: 'layout',
  icon: 'fa fa-list-alt',
  selector: 'panel',
  template: `<div class="panel" [ngClass]="getPanelClass()">
    <div class="panel-heading" *ngIf="!component.hideHeader">
      <h3 class="panel-title">
        {{ component.title }}
        <button *ngIf="component.collapsible" 
                class="btn btn-default btn-xs panel-collapse-button"
                (click)="toggleCollapse()">
          <i class="fa" [ngClass]="component.collapsed ? 'fa-plus' : 'fa-minus'"></i>
        </button>
      </h3>
    </div>
    <div class="panel-body" [ngClass]="{'panel-body-hidden': component.collapsed}">
      <formio-component
        *ngFor="let component of component.components"
        [component]="component"
        (onChange)="onComponentChange($event)">
      </formio-component>
    </div>
    <div class="panel-footer" *ngIf="component.footer">
      {{ component.footer }}
    </div>
  </div>`,
  input: false,
  key: '',
  properties: {
    title: {
      type: 'string',
      title: 'Title',
      description: 'The title text to display in the panel header'
    },
    theme: {
      type: 'string',
      title: 'Theme',
      description: 'The theme of the panel',
      enum: ['default', 'primary', 'success', 'info', 'warning', 'danger']
    },
    collapsible: {
      type: 'boolean',
      title: 'Collapsible',
      description: 'Whether this panel can be collapsed'
    },
    collapsed: {
      type: 'boolean',
      title: 'Initially Collapsed',
      description: 'Whether this panel should be collapsed by default'
    },
    hideHeader: {
      type: 'boolean',
      title: 'Hide Header',
      description: 'Hide the panel header'
    },
    footer: {
      type: 'string',
      title: 'Footer',
      description: 'The footer text of the panel'
    },
    tooltip: {
      type: 'string',
      title: 'Tooltip',
      description: 'The tooltip to show for this panel'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this panel'
    },
    refreshOnChange: {
      type: 'boolean',
      title: 'Refresh On Change',
      description: 'Refresh on form changes'
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
    boxShadow: '',
    headerBackgroundColor: '',
    headerTextColor: '',
    bodyBackgroundColor: '',
    bodyTextColor: '',
    footerBackgroundColor: '',
    footerTextColor: ''
  },
  components: [],
  breadcrumb: 'default',
  scrollable: false,
  scrollableHeight: '',
  description: '',
  errorLabel: '',
  tabindex: '',
  autofocus: false,
  persistent: false,
  modalEdit: false
};
