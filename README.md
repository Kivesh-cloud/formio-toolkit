# Form.io Toolkit for Angular

A comprehensive toolkit for Form.io in Angular applications that provides enhanced configuration capabilities for custom forms and components.

## Features

- Component Registry Service for managing custom Form.io components
- Component Customization Service for extending Form.io components with advanced features
- Built-in customizable components with Form.io builder integration
- Easy integration with existing Form.io Angular projects
- TypeScript support with proper type definitions

## Installation

```bash
npm install formio-toolkit
```

## Dependencies

This library requires the following peer dependencies:
- @angular/core
- @angular/common
- @formio/angular
- formiojs

## Usage

### 1. Import the FormioToolkitModule

```typescript
import { FormioToolkitModule } from 'formio-toolkit';

@NgModule({
  imports: [
    FormioToolkitModule
  ]
})
export class AppModule { }
```

### 2. Basic Component Registration

```typescript
import { ComponentRegistryService, FormioCustomComponentInfo } from 'formio-toolkit';

@Component({
  selector: 'app-root',
  template: '<formio [form]="form"></formio>'
})
export class AppComponent {
  constructor(private componentRegistry: ComponentRegistryService) {
    // Register a custom component
    const customComponent: FormioCustomComponentInfo = {
      type: 'myCustomComponent',
      title: 'My Custom Component',
      group: 'basic',
      icon: 'fa fa-star',
      selector: 'my-custom-component',
      template: '<div>Custom Component Template</div>'
    };

    this.componentRegistry.registerComponent('myCustomComponent', customComponent);
  }
}
```

### 3. Advanced Component Customization

```typescript
import { ComponentCustomizationService } from 'formio-toolkit';

@Component({
  selector: 'app-root',
  template: '<formio [form]="form"></formio>'
})
export class AppComponent {
  constructor(private customization: ComponentCustomizationService) {
    // Add autocomplete to text fields
    this.customization.customizeTextFieldWithAutocomplete({
      suggestions: ['option1', 'option2']
    });

    // Add dynamic loading to select components
    this.customization.customizeSelectWithDynamicOptions({
      dataUrl: 'https://api.example.com/options',
      refreshInterval: 60000
    });

    // Add cloud storage to file upload
    this.customization.customizeFileUploadWithCloudStorage({
      uploadHandler: async (file, config) => {
        // Your upload logic here
      },
      urlHandler: async (key, config) => {
        // Your URL signing logic here
      }
    });
  }
}
```

### 4. Form.io Builder Integration

The customized components will appear in the Form.io builder interface with configurable options:

#### Autocomplete Text Field
- Enable/disable autocomplete
- Configure suggestion list
- Set validation rules

#### Dynamic Select
- Configure data URL
- Set refresh interval
- Define default value

#### Cloud File Upload
- Choose storage provider (AWS, Azure, GCP)
- Set bucket and path
- Configure accepted file types

### 5. Managing Components

```typescript
// Get a registered component
const component = componentRegistry.getComponent('myCustomComponent');

// Remove a component
componentRegistry.removeComponent('myCustomComponent');

// Get all registered components
const allComponents = componentRegistry.getAllComponents();

// Extend an existing component
componentRegistry.extendComponent('textfield', {
  builder: {
    title: 'Enhanced Text Field',
    group: 'advanced',
    settings: {
      customOption: {
        type: 'checkbox',
        label: 'Custom Option',
        weight: 10
      }
    }
  },
  methods: {
    customMethod: () => {
      // Custom functionality
    }
  }
});
```

## Available Customizations

### Text Field
- Autocomplete functionality
- Custom validation
- Input transformers
- Event handlers

### Select
- Dynamic options loading
- Auto-refresh capability
- Custom option formatting
- Search integration

### File Upload
- Cloud storage integration
- Progress tracking
- File validation
- Preview capabilities

### Data Grid
- Advanced filtering
- Custom sorting
- Row actions
- Batch operations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Development server

1. Clone the repository
2. Run `npm install`
3. Run `ng build formio-toolkit` to build the library
4. Run `ng serve` for a dev server

### Build

Run `ng build formio-toolkit` to build the project. The build artifacts will be stored in the `dist/` directory.
