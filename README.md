# @kivesh-virasamy/formio-toolkit

A comprehensive Angular toolkit for Form.io that provides enhanced form components, utilities, and customization options. This toolkit extends Form.io's capabilities with additional features and improved component handling.

## Features

- **Rich Component Library**
  - Text Fields & Areas
  - Select Boxes & Dropdowns
  - Date/Time Pickers
  - File Upload Components
  - Grid & Table Components
  - Payment Integration Components
  - Resource Components
  - Survey Components
  - And many more!

- **Component Registry Service**
  - Easy registration of custom components
  - Override default Form.io components
  - Dynamic component loading

- **Component Customization**
  - Customize component appearance
  - Add custom validation rules
  - Extend component functionality

- **Wizard Support**
  - Multi-step form wizards
  - Progress tracking
  - Navigation controls

## Installation

```bash
# Using npm (recommended)
npm install @kivesh-virasamy/formio-toolkit @formio/js @formio/deprecated-types --legacy-peer-deps

# Using pnpm
pnpm add @kivesh-virasamy/formio-toolkit @formio/js @formio/deprecated-types --legacy-peer-deps
```

Note: The `--legacy-peer-deps` flag is required due to some dependency version conflicts in Form.io packages.

### Required Dependencies
- Angular 16.2.0 or higher
- @formio/js ^5.0.0-rc.31
- @formio/deprecated-types ^2.4.0

## Quick Start

1. Import the module in your `app.module.ts`:

```typescript
import { FormioToolkitModule } from '@kivesh-virasamy/formio-toolkit';

@NgModule({
  imports: [
    FormioToolkitModule,
    // ... other imports
  ],
  // ...
})
export class AppModule { }
```

2. Use the components in your templates:

```typescript
import { Component } from '@angular/core';
import { ComponentRegistryService } from '@kivesh-virasamy/formio-toolkit';

@Component({
  selector: 'app-root',
  template: `
    <formio-form [form]="formDefinition"></formio-form>
  `
})
export class AppComponent {
  constructor(private componentRegistry: ComponentRegistryService) {
    // Register custom components if needed
    this.componentRegistry.registerAllFormioComponents();
  }
}
```

## Available Components

### Basic Components
- TextField
- TextArea
- SelectBox
- Checkbox
- Radio
- Button
- DateTime
- FileUpload

### Advanced Components
- Panel
- Container
- Table/Grid
- HTML Components
- Custom Components
- Payment Integration
- Resource Components
- DataGrid
- Survey

## Customization

You can customize components using the ComponentCustomizationService:

```typescript
import { ComponentCustomizationService } from '@kivesh-virasamy/formio-toolkit';

@Component({
  // ...
})
export class YourComponent {
  constructor(private customization: ComponentCustomizationService) {
    // Customize a component
    this.customization.customize('textfield', {
      template: '<custom-template></custom-template>',
      // ... other customization options
    });
  }
}
```

## Requirements

- Angular 16.2.0 or higher
- @angular/common and @angular/core as peer dependencies
- @formio/js ^5.0.0-rc.31
- @formio/deprecated-types ^2.4.0
- Compatible with Form.io's latest version

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## Development

```bash
# Build the library
ng build @kivesh-virasamy/formio-toolkit

# Run tests
ng test @kivesh-virasamy/formio-toolkit
```

## License

MIT 

## Support

For issues and feature requests, please use the [GitHub issue tracker](https://github.com/kivesh-cloud/formio-toolkit/issues).
