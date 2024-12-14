export const textAreaComponent = {
  type: 'text-area',
  title: 'Text Area',
  group: 'basic',
  icon: 'fa fa-font',
  selector: 'text-area',
  template: `<div class="form-group">
    <label *ngIf="!component.hideLabel" [attr.for]="component.key" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div *ngIf="component.wysiwyg">
      <!-- WYSIWYG Editor placeholder -->
      <div class="wysiwyg-editor"
           [id]="component.key + '-wysiwyg'"
           [innerHTML]="component.value"
           contenteditable="true"
           (input)="onEditorChange($event)">
      </div>
    </div>
    <textarea *ngIf="!component.wysiwyg"
              [id]="component.key"
              class="form-control"
              [name]="component.key"
              [placeholder]="component.placeholder"
              [required]="component.validate?.required"
              [minlength]="component.validate?.minLength"
              [maxlength]="component.validate?.maxLength"
              [rows]="component.rows"
              [cols]="component.cols"
              [disabled]="component.disabled"
              [readonly]="component.readonly"
              [(ngModel)]="component.value"
              (input)="onChange()"
              (blur)="onBlur()">
    </textarea>
    <div class="help-block" *ngIf="component.description">
      {{ component.description }}
    </div>
    <div class="alert alert-danger" *ngIf="component.error">
      {{ component.error }}
    </div>
  </div>`,
  input: true,
  key: '',
  properties: {
    label: {
      type: 'string',
      title: 'Label',
      description: 'The label for this field.'
    },
    placeholder: {
      type: 'string',
      title: 'Placeholder',
      description: 'The placeholder text that will appear when this field is empty.'
    },
    description: {
      type: 'string',
      title: 'Description',
      description: 'The description is text that will appear below the input field.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    rows: {
      type: 'number',
      title: 'Rows',
      description: 'The number of rows in the text area.',
      default: 3
    },
    wysiwyg: {
      type: 'boolean',
      title: 'Enable WYSIWYG',
      description: 'Enable rich text editing.'
    },
    editor: {
      type: 'string',
      title: 'Editor',
      description: 'The rich text editor to use.',
      enum: ['ckeditor', 'quill', 'ace'],
      default: 'ckeditor'
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
    },
    clearOnHide: {
      type: 'boolean',
      title: 'Clear on Hide',
      description: 'Clear the value when this component is hidden.'
    }
  },
  validation: {
    required: {
      type: 'boolean',
      title: 'Required',
      description: 'A required field must be filled in before the form can be submitted.'
    },
    minLength: {
      type: 'number',
      title: 'Minimum Length',
      description: 'The minimum length requirement this field must meet.'
    },
    maxLength: {
      type: 'number',
      title: 'Maximum Length',
      description: 'The maximum length requirement this field must meet.'
    },
    pattern: {
      type: 'string',
      title: 'Pattern',
      description: 'The regular expression pattern test that the field value must pass before the form can be submitted.'
    },
    customMessage: {
      type: 'string',
      title: 'Custom Error Message',
      description: 'Custom error message displayed when validation fails.'
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
    resize: 'vertical'
  },
  editorSettings: {
    toolbar: [],
    plugins: [],
    skin: 'moono-lisa',
    height: '200px'
  },
  defaultValue: '',
  persistent: true,
  protected: false,
  multiple: false,
  autofocus: false,
  tabindex: '',
  spellcheck: true
};
