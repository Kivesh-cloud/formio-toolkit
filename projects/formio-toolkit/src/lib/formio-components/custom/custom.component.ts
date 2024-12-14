export const customComponent = {
  type: 'custom',
  title: 'Custom',
  group: 'advanced',
  icon: 'fa fa-cubes',
  selector: 'custom',
  template: '<div class=\"formio-custom\"></div>',
  input: true,
  key: '',
  properties: {
    componentTitle: {
      type: 'string',
      title: 'Component Title',
      description: 'The title of this custom component.'
    },
    template: {
      type: 'string',
      title: 'Template',
      description: 'The template for this custom component.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    refreshOnChange: {
      type: 'boolean',
      title: 'Refresh On Change',
      description: 'Refresh content when other fields change.'
    },
    modalEdit: {
      type: 'boolean',
      title: 'Modal Edit',
      description: 'Enable editing in modal.'
    },
    customConditional: {
      type: 'string',
      title: 'Custom Conditional',
      description: 'Custom conditional logic.'
    },
    logic: {
      type: 'array',
      title: 'Logic',
      description: 'Advanced logic for this component.'
    },
    calculateValue: {
      type: 'string',
      title: 'Calculated Value',
      description: 'Calculate a value for this component.'
    },
    validateOn: {
      type: 'string',
      title: 'Validate On',
      description: 'Validate on these events.',
      enum: ['change', 'blur', 'submit']
    },
    validation: {
      required: false,
      custom: '',
      customPrivate: false,
      customMessage: '',
      json: '',
      minLength: '',
      maxLength: '',
      pattern: '',
      multiple: false
    },
    errorLabel: {
      type: 'string',
      title: 'Error Label',
      description: 'The label shown when an error occurs.'
    },
    errors: {
      type: 'object',
      title: 'Custom Error Messages',
      description: 'Custom error messages for this component.'
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
    textAlign: '',
    customCSS: ''
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  logic: [],
  defaultValue: null,
  valueProperty: '',
  refreshOn: '',
  clearOnRefresh: false,
  validateOn: 'change',
  validate: {
    required: false,
    custom: '',
    customPrivate: false
  },
  unique: false,
  persistent: true,
  protected: false,
  multiple: false,
  tableView: true,
  modalEdit: false,
  editor: 'ace',
  editorOptions: {
    theme: 'monokai',
    mode: 'javascript',
    tabSize: 2,
    wrap: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true
  }
};
