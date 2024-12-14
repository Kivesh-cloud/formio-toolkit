export const paymentComponent = {
  type: 'payment',
  title: 'Payment',
  group: 'payment',
  icon: 'fa fa-credit-card',
  selector: 'payment',
  template: '<div class=\"formio-payment\"></div>',
  input: true,
  key: '',
  properties: {
    paymentType: {
      type: 'string',
      title: 'Payment Type',
      description: 'The type of payment to process.',
      enum: ['stripe', 'square', 'paypal', 'custom'],
      default: 'stripe'
    },
    currency: {
      type: 'string',
      title: 'Currency',
      description: 'The currency to use for payment.',
      default: 'USD'
    },
    amount: {
      type: 'number',
      title: 'Amount',
      description: 'The amount to charge.'
    },
    paymentMethods: {
      type: 'array',
      title: 'Payment Methods',
      description: 'Allowed payment methods.',
      items: {
        type: 'string',
        enum: ['card', 'bank', 'wallet']
      }
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    stripe: {
      publishableKey: '',
      secretKey: '',
      style: {
        base: {
          fontSize: '16px',
          color: '#32325d',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSmoothing: 'antialiased',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      }
    },
    paypal: {
      clientId: '',
      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
        label: 'paypal'
      }
    },
    square: {
      applicationId: '',
      locationId: '',
      style: {
        input: {
          fontSize: '16px',
          lineHeight: '24px',
          padding: '16px',
          placeholderColor: '#a0a0a0',
          backgroundColor: 'transparent'
        }
      }
    },
    validation: {
      required: false
    },
    errorLabel: {
      type: 'string',
      title: 'Error Label',
      description: 'The label shown when an error occurs.'
    },
    successLabel: {
      type: 'string',
      title: 'Success Label',
      description: 'The label shown on successful payment.'
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
    width: '',
    height: ''
  },
  conditional: {
    show: null,
    when: null,
    eq: ''
  },
  paymentType: 'stripe',
  currency: 'USD',
  amount: 0,
  paymentMethods: ['card'],
  multiple: false,
  tableView: false,
  modalEdit: false,
  persistent: true,
  protected: true,
  unique: false,
  validateOn: 'submit',
  errorMessage: '',
  customErrorMessage: '',
  saveOnServer: true,
  redactCardData: true,
  enableCardSaving: false,
  allowMultiplePayments: false,
  paymentStatus: {
    success: false,
    error: null,
    pending: false
  }
};
