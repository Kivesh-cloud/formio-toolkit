export const imageComponent = {
  type: 'image',
  title: 'Image',
  group: 'basic',
  icon: 'fa fa-image',
  selector: 'image',
  template: `<div class="formio-image">
    <img src="{{ component.src }}"
         alt="{{ component.alt }}"
         title="{{ component.title }}"
         width="{{ component.width }}"
         height="{{ component.height }}"
         class="{{ component.customClass }}"
         style="object-fit: {{ component.imageSize }};">
  </div>`,
  input: false,
  key: '',
  properties: {
    src: {
      type: 'string',
      title: 'Image Source',
      description: 'The source URL of the image.'
    },
    alt: {
      type: 'string',
      title: 'Alt Text',
      description: 'Alternative text for the image.'
    },
    title: {
      type: 'string',
      title: 'Title',
      description: 'The title text for the image.'
    },
    width: {
      type: 'string',
      title: 'Width',
      description: 'The width of the image.'
    },
    height: {
      type: 'string',
      title: 'Height',
      description: 'The height of the image.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    responsive: {
      type: 'boolean',
      title: 'Responsive',
      description: 'Make the image responsive.',
      default: true
    },
    imageSize: {
      type: 'string',
      title: 'Image Size',
      description: 'The size of the image.',
      enum: ['cover', 'contain', 'auto'],
      default: 'contain'
    },
    lazyLoad: {
      type: 'boolean',
      title: 'Lazy Load',
      description: 'Enable lazy loading for the image.'
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
    borderWidth: '',
    borderStyle: '',
    borderColor: '',
    borderRadius: '',
    boxShadow: '',
    opacity: '',
    objectFit: '',
    objectPosition: ''
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  src: '',
  alt: '',
  width: '',
  height: '',
  responsive: true,
  imageSize: 'contain',
  lazyLoad: false,
  tableView: false,
  modalEdit: false,
  persistent: false,
  refreshOnChange: false,
  clearOnRefresh: false,
  validate: {
    required: false
  },
  imageUpload: {
    enabled: false,
    maxSize: 10,
    types: ['jpg', 'jpeg', 'png', 'gif'],
    crop: false,
    cropAspectRatio: 1
  }
};
