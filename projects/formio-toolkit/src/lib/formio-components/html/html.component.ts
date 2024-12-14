export const htmlComponent = {
  type: 'html',
  title: 'HTML',
  group: 'layout',
  icon: 'fa fa-code',
  selector: 'html',
  template: `<div class="formio-html"
                 [innerHTML]="component.content | safeHtml"
                 [ngClass]="component.customClass">
    <div class="alert alert-danger" *ngIf="component.error">
      {{ component.error }}
    </div>
  </div>`,
  input: false,
  key: '',
  properties: {
    content: {
      type: 'string',
      title: 'Content',
      description: 'The HTML content'
    },
    tag: {
      type: 'string',
      title: 'HTML Tag',
      description: 'The HTML tag to use for the element'
    },
    className: {
      type: 'string',
      title: 'CSS Class',
      description: 'The CSS class to add to this component'
    },
    refreshOnChange: {
      type: 'boolean',
      title: 'Refresh On Change',
      description: 'Refresh on form changes'
    },
    sanitize: {
      type: 'boolean',
      title: 'Sanitize Content',
      description: 'Sanitize HTML content',
      default: true
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    attrs: {
      type: 'array',
      title: 'Attributes',
      description: 'The HTML attributes for this element.'
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
  conditional: {
    show: null,
    when: null,
    eq: ''
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
    fontSize: '',
    fontFamily: '',
    textAlign: '',
    lineHeight: '',
    boxShadow: '',
    opacity: '',
    cursor: ''
  },
  content: '',
  className: '',
  attrs: [],
  refreshOnChange: false,
  sanitize: true,
  tableView: false,
  modalEdit: false,
  persistent: false,
  tabindex: '',
  autofocus: false,
  editor: 'ace',
  editorOptions: {
    theme: 'monokai',
    mode: 'html',
    tabSize: 2,
    wrap: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true
  }
};
