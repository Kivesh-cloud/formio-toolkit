# Form.io Toolkit for Angular

A comprehensive toolkit for Form.io in Angular applications that provides enhanced configuration capabilities for custom forms and components.

## Features

- Component Registry Service for managing custom Form.io components
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

### 2. Register Custom Components

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
      template: '<div>Custom Component Template</div>',
      weight: 100,
      input: true
    };

    this.componentRegistry.registerComponent('myCustomComponent', customComponent);
  }
}
```

### 3. Managing Components

```typescript
// Get a registered component
const component = componentRegistry.getComponent('myCustomComponent');

// Remove a component
componentRegistry.removeComponent('myCustomComponent');

// Get all registered components
const allComponents = componentRegistry.getAllComponents();
```

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
