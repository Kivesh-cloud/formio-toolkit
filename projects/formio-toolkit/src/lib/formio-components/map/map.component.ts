export const mapComponent = {
  type: 'map',
  title: 'Map',
  group: 'advanced',
  icon: 'fa fa-map-marker',
  selector: 'map',
  template: '<div class=\"formio-map\"></div>',
  input: true,
  key: '',
  properties: {
    provider: {
      type: 'string',
      title: 'Map Provider',
      description: 'The map provider to use.',
      enum: ['google', 'openstreetmap', 'mapbox'],
      default: 'google'
    },
    apiKey: {
      type: 'string',
      title: 'API Key',
      description: 'The API key for the map provider.'
    },
    height: {
      type: 'number',
      title: 'Height',
      description: 'The height of the map.',
      default: 400
    },
    zoom: {
      type: 'number',
      title: 'Zoom Level',
      description: 'The initial zoom level.',
      default: 13
    },
    center: {
      type: 'object',
      title: 'Center',
      description: 'The initial center position.',
      properties: {
        lat: {
          type: 'number',
          title: 'Latitude'
        },
        lng: {
          type: 'number',
          title: 'Longitude'
        }
      }
    },
    markerColor: {
      type: 'string',
      title: 'Marker Color',
      description: 'The color of map markers.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    mapType: {
      type: 'string',
      title: 'Map Type',
      description: 'The type of map to display.',
      enum: ['roadmap', 'satellite', 'hybrid', 'terrain'],
      default: 'roadmap'
    },
    controls: {
      type: 'object',
      title: 'Map Controls',
      description: 'Enable/disable map controls.',
      properties: {
        zoom: true,
        mapType: true,
        streetView: true,
        fullscreen: true,
        rotate: true,
        scale: true
      }
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
    borderWidth: '',
    borderStyle: '',
    borderColor: '',
    borderRadius: '',
    boxShadow: ''
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  provider: 'google',
  apiKey: '',
  height: 400,
  zoom: 13,
  center: {
    lat: 0,
    lng: 0
  },
  markerColor: '#ff0000',
  mapType: 'roadmap',
  controls: {
    zoom: true,
    mapType: true,
    streetView: true,
    fullscreen: true,
    rotate: true,
    scale: true
  },
  multiple: false,
  tableView: true,
  modalEdit: false,
  persistent: true,
  validateOn: 'change',
  validate: {
    required: false,
    custom: '',
    customPrivate: false
  },
  mapSettings: {
    disableDefaultUI: false,
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    styles: [],
    minZoom: 0,
    maxZoom: 21,
    gestureHandling: 'auto'
  },
  geocoder: {
    enabled: false,
    provider: 'google',
    apiKey: '',
    delay: 300,
    params: {}
  }
};
