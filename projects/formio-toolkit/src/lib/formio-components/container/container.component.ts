export const containerComponent = {
  type: 'container',
  title: 'Container',
  group: 'layout',
  icon: 'fa fa-folder-open',
  selector: 'container',
  template: '<div class=\"formio-container\"></div>',
  input: false,
  key: '',
  properties: {
    label: {
      type: 'string',
      title: 'Label',
      description: 'The label for this container.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    dataGridLabel: {
      type: 'boolean',
      title: 'Show Label in DataGrid',
      description: 'Show the label when in a Datagrid.'
    },
    labelPosition: {
      type: 'string',
      title: 'Label Position',
      description: 'Position of the label relative to the container.',
      enum: ['top', 'bottom', 'left', 'right'],
      default: 'top'
    },
    labelWidth: {
      type: 'number',
      title: 'Label Width',
      description: 'The width of the label.'
    },
    labelMargin: {
      type: 'number',
      title: 'Label Margin',
      description: 'The margin of the label.'
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
    },
    tableView: {
      type: 'boolean',
      title: 'Table View',
      description: 'Show this component in table view.'
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
    borderWidth: '',
    borderStyle: '',
    borderColor: '',
    borderRadius: '',
    boxShadow: '',
    display: '',
    flexDirection: '',
    justifyContent: '',
    alignItems: '',
    minHeight: '',
    maxHeight: '',
    overflow: ''
  },
  components: [],
  tree: false,
  breadcrumb: 'default',
  lazyLoad: false,
  tooltip: '',
  description: '',
  errorLabel: '',
  tabindex: '',
  autofocus: false,
  persistent: false,
  modalEdit: false,
  refreshOnChange: false,
  clearOnHide: true,
  calculateValue: '',
  allowCalculateOverride: false,
  validateOn: 'change'
};
