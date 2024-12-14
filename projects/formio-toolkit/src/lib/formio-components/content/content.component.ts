export const contentComponent = {
  type: 'content',
  title: 'Content',
  group: 'basic',
  icon: 'fa fa-html5',
  selector: 'content',
  template: '<div class=\"formio-content\"></div>',
  input: false,
  key: '',
  properties: {
    html: {
      type: 'string',
      title: 'HTML Content',
      description: 'The HTML content to display.'
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
    sanitize: {
      type: 'boolean',
      title: 'Sanitize Content',
      description: 'Sanitize HTML content before display.',
      default: true
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
    lineHeight: '',
    opacity: ''
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  html: '',
  refreshOnChange: false,
  sanitize: true,
  tableView: false,
  modalEdit: false,
  editor: 'ace',
  editorOptions: {
    theme: 'monokai',
    mode: 'html',
    tabSize: 2,
    wrap: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true
  },
  customConditional: '',
  logic: [],
  attributes: {},
  tag: 'div',
  content: '',
  processMarkdown: false
};
