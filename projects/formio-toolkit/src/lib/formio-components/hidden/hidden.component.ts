export const hiddenComponent = {
  type: 'hidden',
  title: 'Hidden',
  group: 'basic',
  icon: 'fa fa-eye-slash',
  selector: 'hidden',
  template: `<input type="hidden"
                   [id]="component.key"
                   [name]="component.key"
                   [value]="component.value"
                   (change)="onChange()">`,
  input: true,
  key: '',
  properties: {
    calculateValue: {
      type: 'string',
      title: 'Calculate Value',
      description: 'JavaScript formula to calculate the value'
    },
    persistent: {
      type: 'boolean',
      title: 'Persistent',
      description: 'Whether to persist the value in the database'
    },
    encrypted: {
      type: 'boolean',
      title: 'Encrypted',
      description: 'Whether to encrypt the value when stored'
    }
  },
  validation: {
    custom: {
      type: 'string',
      title: 'Custom Validation',
      description: 'Custom validation code.'
    },
    customPrivate: {
      type: 'boolean',
      title: 'Custom Private Validation',
      description: 'Custom private validation code.'
    }
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  defaultValue: '',
  dbIndex: false,
  customDefaultValue: '',
  allowCalculateOverride: false,
  tableView: false
};
