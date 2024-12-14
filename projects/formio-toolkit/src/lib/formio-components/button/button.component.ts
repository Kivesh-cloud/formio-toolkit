export const buttonComponent = {
  type: 'button',
  title: 'Button',
  group: 'basic',
  icon: 'fa fa-stop',
  selector: 'button',
  template: '<button class=\"btn\" [ngClass]=\"buttonClass\"></button>',
  input: false,
  key: '',
  properties: {
    label: {
      type: 'string',
      title: 'Label',
      description: 'The label for this button.'
    },
    action: {
      type: 'string',
      title: 'Action',
      description: 'The action to perform when clicked.',
      enum: ['submit', 'reset', 'event', 'oauth', 'custom'],
      default: 'submit'
    },
    theme: {
      type: 'string',
      title: 'Theme',
      description: 'The theme of the button.',
      enum: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      default: 'primary'
    },
    size: {
      type: 'string',
      title: 'Size',
      description: 'The size of the button.',
      enum: ['sm', 'md', 'lg'],
      default: 'md'
    },
    block: {
      type: 'boolean',
      title: 'Block',
      description: 'Make the button span the full width.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    leftIcon: {
      type: 'string',
      title: 'Left Icon',
      description: 'The icon to display to the left of the button text.'
    },
    rightIcon: {
      type: 'string',
      title: 'Right Icon',
      description: 'The icon to display to the right of the button text.'
    },
    shortcut: {
      type: 'string',
      title: 'Shortcut',
      description: 'Keyboard shortcut for the button.'
    },
    hidden: {
      type: 'boolean',
      title: 'Hidden',
      description: 'A boolean value that will hide/show this component.'
    },
    disabled: {
      type: 'boolean',
      title: 'Disabled',
      description: 'Disable this component.'
    },
    disableOnInvalid: {
      type: 'boolean',
      title: 'Disable on Form Invalid',
      description: 'Disable this button if the form is invalid.'
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
    color: '',
    backgroundColor: '',
    borderWidth: '',
    borderStyle: '',
    borderColor: '',
    borderRadius: '',
    fontWeight: '',
    fontSize: '',
    textTransform: '',
    boxShadow: ''
  },
  persistent: false,
  protected: false,
  autofocus: false,
  tabindex: '',
  dataGridLabel: true,
  name: '',
  showValidations: false,
  custom: {
    url: '',
    headers: [],
    method: 'post'
  },
  saveOnEnter: false
};
