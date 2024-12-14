export const tabsComponent = {
  type: 'tabs',
  title: 'Tabs',
  group: 'layout',
  icon: 'fa fa-folder-o',
  selector: 'tabs',
  template: `<div class="formio-tabs-wrapper" [ngClass]="component.customClass">
    <ul class="nav nav-tabs">
      <li *ngFor="let tab of component.tabs; let i = index" 
          [class.active]="i === activeTab"
          [class.disabled]="tab.disabled"
          [class.has-error]="tab.error">
        <a (click)="!tab.disabled && setActiveTab(i)">
          <i *ngIf="tab.icon" [class]="tab.icon"></i>
          {{ tab.label }}
          <span class="tab-error-indicator" *ngIf="tab.error">
            <i class="fa fa-exclamation-triangle text-danger"></i>
          </span>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div *ngFor="let tab of component.tabs; let i = index" 
           class="tab-pane" 
           [class.active]="i === activeTab">
        <div class="formio-tab-panel">
          <formio-component
            *ngFor="let component of tab.components"
            [component]="component"
            (onChange)="onComponentChange($event)">
          </formio-component>
        </div>
      </div>
    </div>
  </div>`,
  input: false,
  key: '',
  properties: {
    tabs: {
      type: 'array',
      title: 'Tabs',
      description: 'List of tabs',
      items: {
        type: 'object',
        properties: {
          label: { type: 'string' },
          key: { type: 'string' },
          icon: { type: 'string' },
          disabled: { type: 'boolean' },
          components: { type: 'array' }
        }
      }
    },
    vertical: {
      type: 'boolean',
      title: 'Vertical',
      description: 'Show tabs vertically'
    },
    justified: {
      type: 'boolean',
      title: 'Justified',
      description: 'Make tabs equal width'
    },
    defaultTab: {
      type: 'number',
      title: 'Default Tab',
      description: 'The tab to show by default'
    },
    lazy: {
      type: 'boolean',
      title: 'Lazy Load',
      description: 'Only load tab content when activated'
    }
  },
  style: {
    margin: '',
    padding: '',
    'border-radius': '',
    'background-color': '',
    'tab-color': '',
    'tab-background': '',
    'active-tab-color': '',
    'active-tab-background': '',
    'hover-tab-color': '',
    'hover-tab-background': ''
  }
};
