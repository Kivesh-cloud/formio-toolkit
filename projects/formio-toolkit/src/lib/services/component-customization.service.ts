import { Injectable } from '@angular/core';
import { ComponentRegistryService } from './component-registry.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentCustomizationService {
  constructor(private componentRegistry: ComponentRegistryService) {}

  /**
   * Example: Customize a text field to include auto-complete functionality
   */
  customizeTextFieldWithAutocomplete(options: any) {
    const customFeatures = {
      builder: {
        title: 'Autocomplete Text Field',
        group: 'advanced',
        icon: 'terminal',
        settings: {
          autofocus: true,
          input: true,
          tableView: true,
          autocomplete: {
            type: 'checkbox',
            label: 'Enable Autocomplete',
            tooltip: 'Enable autocomplete suggestions',
            weight: 10
          },
          suggestions: {
            type: 'datagrid',
            label: 'Suggestions',
            tooltip: 'List of autocomplete suggestions',
            weight: 20
          }
        }
      },
      methods: {
        filterSuggestions: (value: string) => {
          return options.suggestions.filter((s: string) => 
            s.toLowerCase().includes(value.toLowerCase())
          );
        }
      },
      transformers: {
        beforeDisplay: (value: any) => {
          return options.transformer ? options.transformer(value) : value;
        }
      }
    };

    this.componentRegistry.extendComponent('textfield', customFeatures);
  }

  /**
   * Example: Customize a select component with dynamic options loading
   */
  customizeSelectWithDynamicOptions(options: any) {
    let optionsCache: any[] = [];
    let refreshTimer: any;

    const loadOptionsImpl = async () => {
      try {
        const response = await fetch(options.dataUrl);
        optionsCache = await response.json();
        return optionsCache;
      } catch (error) {
        console.error('Failed to load options:', error);
        return [];
      }
    };

    const refreshOptionsImpl = () => {
      if (refreshTimer) {
        clearInterval(refreshTimer);
      }
      if (options.refreshInterval) {
        refreshTimer = setInterval(loadOptionsImpl, options.refreshInterval);
      }
    };

    const customFeatures = {
      builder: {
        title: 'Dynamic Select',
        group: 'advanced',
        icon: 'list',
        settings: {
          dataUrl: {
            type: 'textfield',
            label: 'Data URL',
            tooltip: 'URL to fetch options from',
            weight: 10
          },
          refreshInterval: {
            type: 'number',
            label: 'Refresh Interval (ms)',
            tooltip: 'How often to refresh options (in milliseconds)',
            weight: 20
          },
          defaultValue: {
            type: 'textfield',
            label: 'Default Value',
            tooltip: 'Default selected value',
            weight: 30
          }
        }
      },
      methods: {
        loadOptions: loadOptionsImpl,
        refreshOptions: refreshOptionsImpl,
        getOptions: () => optionsCache
      },
      hooks: {
        afterInit: () => {
          loadOptionsImpl();
          refreshOptionsImpl();
        },
        onDestroy: () => {
          if (refreshTimer) {
            clearInterval(refreshTimer);
          }
        }
      }
    };

    this.componentRegistry.extendComponent('select', customFeatures);
  }

  /**
   * Example: Customize a file upload component with cloud storage integration
   */
  customizeFileUploadWithCloudStorage(options: any) {
    const customFeatures = {
      builder: {
        title: 'Cloud File Upload',
        group: 'advanced',
        icon: 'cloud-upload',
        settings: {
          storageType: {
            type: 'select',
            label: 'Storage Provider',
            tooltip: 'Choose cloud storage provider',
            weight: 10,
            data: {
              values: [
                { label: 'AWS S3', value: 'aws' },
                { label: 'Azure Blob', value: 'azure' },
                { label: 'Google Cloud', value: 'gcp' }
              ]
            }
          },
          bucket: {
            type: 'textfield',
            label: 'Bucket Name',
            tooltip: 'Storage bucket name',
            weight: 20
          },
          path: {
            type: 'textfield',
            label: 'Storage Path',
            tooltip: 'Path within bucket',
            weight: 30
          },
          acceptedFiles: {
            type: 'textfield',
            label: 'Accepted Files',
            tooltip: 'Comma-separated list of accepted file types',
            weight: 40
          }
        }
      },
      methods: {
        uploadToCloud: async (file: File) => {
          return options.uploadHandler ? 
            options.uploadHandler(file, options.storageConfig) : 
            Promise.reject('No upload handler provided');
        },
        getSignedUrl: async (fileKey: string) => {
          return options.urlHandler ?
            options.urlHandler(fileKey, options.storageConfig) :
            Promise.reject('No URL handler provided');
        }
      }
    };

    this.componentRegistry.extendComponent('file', customFeatures);
  }
}
