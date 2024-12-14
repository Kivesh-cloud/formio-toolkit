import { ChangeDetectionStrategy, Injectable, ViewEncapsulation } from '@angular/core';
import { Components } from 'formiojs';
import { 
  textFieldComponent,
  textAreaComponent,
  selectBoxComponent,
  checkboxComponent,
  radioComponent,
  buttonComponent,
  dateTimeComponent,
  fileUploadComponent,
  hiddenComponent,
  panelComponent,
  containerComponent,
  tableComponent,
  gridComponent,
  htmlComponent,
  htmlTableComponent,
  customComponent,
  paymentComponent,
  resourceComponent,
  dataSourceComponent,
  dataGridComponent,
  surveyComponent,
  signatureComponent,
  contentComponent,
  imageComponent,
  mapComponent,
  columnComponent,
  rowComponent,
  wellComponent,
  tagsComponent,
  wizardComponent,
  passwordComponent,
  selectComponent,
  submitComponent
} from '../formio-components';

export interface FormioCustomComponentInfo {
  type: string;
  selector: string;
  title: string;
  group: string;
  icon: string;
  template: string;
  changeDetection?: ChangeDetectionStrategy;
  encapsulation?: ViewEncapsulation;
  builder?: {
    title: string;
    group: string;
    icon: string;
    documentation?: string;
    weight?: number;
    schema?: any;
    builderInfo?: {
      title: string;
      group: string;
      icon: string;
      documentation?: string;
      weight?: number;
      schema?: any;
    };
    settings?: {
      autofocus?: boolean;
      input?: boolean;
      tableView?: boolean;
      label?: string;
      key?: string;
      placeholder?: string;
      multiple?: boolean;
      protected?: boolean;
      unique?: boolean;
      persistent?: boolean;
      hidden?: boolean;
      clearOnHide?: boolean;
      validate?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        pattern?: string;
        custom?: string;
        customPrivate?: boolean;
      };
      conditional?: {
        show?: string;
        when?: string;
        eq?: string;
      };
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class ComponentRegistryService {
  private components: Map<string, any> = new Map();
  private customizations: Map<string, any> = new Map();

  constructor() {
    this.registerAllFormioComponents();
  }

  registerComponent(type: string, component: any, customFeatures?: any) {
    const baseComponent = { ...component };
    
    // Add builder configuration if provided
    if (customFeatures?.builder) {
      baseComponent.builderInfo = {
        ...baseComponent.builderInfo,
        ...customFeatures.builder
      };
    }

    // Add custom builder settings
    if (customFeatures?.settings) {
      baseComponent.settings = {
        ...baseComponent.settings,
        ...customFeatures.settings
      };
    }

    // Register with Form.io builder
    Components.addComponent(type, baseComponent);

    // Store locally
    this.components.set(type, baseComponent);
    this.customizations.set(type, customFeatures || {});
  }

  getComponent(type: string): any {
    return this.components.get(type);
  }

  getCustomizations(type: string): any {
    return this.customizations.get(type);
  }

  hasComponent(type: string): boolean {
    return this.components.has(type);
  }

  updateComponent(type: string, updates: any) {
    if (this.hasComponent(type)) {
      const component = this.getComponent(type);
      const updatedComponent = { ...component, ...updates };
      this.components.set(type, updatedComponent);
    }
  }

  extendComponent(type: string, extension: any) {
    if (this.hasComponent(type)) {
      const baseComponent = this.getComponent(type);
      const extendedComponent = this.mergeComponentDefinitions(baseComponent, extension);

      // Update Form.io builder
      Components.addComponent(type, extendedComponent);

      // Update local storage
      this.components.set(type, extendedComponent);
    }
  }

  private mergeComponentDefinitions(base: any, extension: any): any {
    const merged = { ...base };

    // Merge basic properties
    merged.properties = {
      ...(base.properties || {}),
      ...(extension.properties || {})
    };

    // Merge builder settings
    if (extension.builder) {
      merged.builderInfo = {
        ...(base.builderInfo || {}),
        ...(extension.builder || {})
      };
    }

    // Merge component settings
    if (extension.settings) {
      merged.settings = {
        ...(base.settings || {}),
        ...(extension.settings || {})
      };
    }

    // Merge template if provided
    if (extension.template) {
      merged.template = extension.template;
    }

    // Merge validation rules
    if (extension.validation) {
      merged.validation = {
        ...(base.validation || {}),
        ...(extension.validation || {})
      };
    }

    return merged;
  }

  registerAllFormioComponents(): void {
    const componentsList: any[] = [
      textFieldComponent,
      textAreaComponent,
      selectBoxComponent,
      checkboxComponent,
      radioComponent,
      buttonComponent,
      dateTimeComponent,
      fileUploadComponent,
      hiddenComponent,
      panelComponent,
      containerComponent,
      tableComponent,
      gridComponent,
      htmlComponent,
      customComponent,
      paymentComponent,
      resourceComponent,
      dataSourceComponent,
      dataGridComponent,
      surveyComponent,
      signatureComponent,
      contentComponent,
      imageComponent,
      mapComponent,
      htmlTableComponent,
      columnComponent,
      rowComponent,
      wellComponent,
      tagsComponent,
      wizardComponent,
      passwordComponent,
      selectComponent,
      submitComponent
    ];
    componentsList.forEach(component => {
      this.registerComponent(component.type, component);
    });
  }
}
