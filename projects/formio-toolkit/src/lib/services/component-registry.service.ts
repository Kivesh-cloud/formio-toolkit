import { Injectable } from '@angular/core';
import { Components } from 'formiojs';

export interface FormioCustomComponentInfo {
  type: string;
  title: string;
  group: string;
  icon: string;
  selector: string;
  template: string;
  weight?: number;
  schema?: any;
  input?: boolean;
  documentation?: string;
  settings?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ComponentRegistryService {
  private customComponents: Map<string, FormioCustomComponentInfo> = new Map();

  constructor() {}

  /**
   * Register a custom component
   * @param type The type/key of the component
   * @param component The component information
   */
  registerComponent(type: string, component: FormioCustomComponentInfo): void {
    this.customComponents.set(type, component);
    (Components as any).addComponent(type, component);
  }

  /**
   * Get a registered component by type
   * @param type The type/key of the component
   */
  getComponent(type: string): FormioCustomComponentInfo | undefined {
    return this.customComponents.get(type);
  }

  /**
   * Remove a registered component
   * @param type The type/key of the component
   */
  removeComponent(type: string): boolean {
    const component = this.customComponents.get(type);
    if (component) {
      this.customComponents.delete(type);
      delete (Components as any).components[type];
      return true;
    }
    return false;
  }

  /**
   * Get all registered custom components
   */
  getAllComponents(): Map<string, FormioCustomComponentInfo> {
    return new Map(this.customComponents);
  }
}
