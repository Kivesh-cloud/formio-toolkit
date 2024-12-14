export const rowComponent = {
  type: 'row',
  title: 'Row',
  group: 'layout',
  icon: 'fa fa-rows',
  selector: 'row',
  template: '<div class=\"row\"></div>',
  input: false,
  components: [],
  properties: {
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
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
    align: 'left'
  }
};
