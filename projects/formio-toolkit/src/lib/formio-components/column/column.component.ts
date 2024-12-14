export const columnComponent = {
  type: 'column',
  title: 'Column',
  group: 'layout',
  icon: 'fa fa-th',
  selector: 'column',
  template: '<div class=\"column\"></div>',
  input: false,
  components: [],
  properties: {
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    width: {
      type: 'number',
      title: 'Column Width',
      description: 'The width of this column on a scale of 1 to 12.',
      min: 1,
      max: 12,
      default: 6
    },
    offset: {
      type: 'number',
      title: 'Column Offset',
      description: 'The offset of this column on a scale of 0 to 11.',
      min: 0,
      max: 11,
      default: 0
    },
    push: {
      type: 'number',
      title: 'Column Push',
      description: 'Push the column a number of columns to the right.',
      min: 0,
      max: 11,
      default: 0
    },
    pull: {
      type: 'number',
      title: 'Column Pull',
      description: 'Pull the column a number of columns to the left.',
      min: 0,
      max: 11,
      default: 0
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
  responsive: {
    xs: { width: 12 },
    sm: { width: 6 },
    md: { width: 6 },
    lg: { width: 6 },
    xl: { width: 6 }
  },
  style: {
    margin: '',
    padding: '',
    backgroundColor: '',
    borderWidth: '',
    borderStyle: '',
    borderColor: ''
  }
};
