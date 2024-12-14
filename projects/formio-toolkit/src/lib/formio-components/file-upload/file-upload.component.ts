export const fileUploadComponent = {
  type: 'file-upload',
  title: 'File Upload',
  group: 'advanced',
  icon: 'fa fa-file',
  selector: 'file-upload',
  template: `<div class="form-group">
    <label *ngIf="!component.hideLabel" [attr.for]="component.key" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div class="file-upload-wrapper">
      <div class="file-upload-area" 
           [class.dragover]="isDragover"
           (dragover)="onDragOver($event)"
           (dragleave)="onDragLeave($event)"
           (drop)="onDrop($event)">
        <div class="file-upload-content" *ngIf="!component.files?.length">
          <i class="fa fa-cloud-upload"></i>
          <p>{{ component.placeholder || 'Drag and drop files here or click to browse' }}</p>
          <input type="file"
                 [id]="component.key"
                 [name]="component.key"
                 [multiple]="component.multiple"
                 [accept]="component.filePattern"
                 [disabled]="component.disabled"
                 (change)="onFileSelect($event)"
                 style="display: none;">
          <button class="btn btn-primary" (click)="triggerFileInput()">
            Browse Files
          </button>
        </div>
        <div class="file-list" *ngIf="component.files?.length">
          <div class="file-item" *ngFor="let file of component.files; let i = index">
            <div class="file-info">
              <i class="fa" [ngClass]="getFileIcon(file)"></i>
              <span class="file-name">{{ file.name }}</span>
              <span class="file-size">({{ formatFileSize(file.size) }})</span>
            </div>
            <div class="file-progress" *ngIf="file.progress !== undefined">
              <div class="progress">
                <div class="progress-bar" [style.width.%]="file.progress"></div>
              </div>
            </div>
            <div class="file-actions">
              <button class="btn btn-danger btn-sm" 
                      (click)="removeFile(i)" 
                      [disabled]="component.disabled">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    description: {
      type: 'string',
      title: 'Description',
      description: 'The description is text that will appear below the file upload.'
    },
    customClass: {
      type: 'string',
      title: 'Custom CSS Class',
      description: 'Custom CSS class to add to this component.'
    },
    multiple: {
      type: 'boolean',
      title: 'Multiple Files',
      description: 'Allow multiple files to be uploaded.'
    },
    storage: {
      type: 'string',
      title: 'Storage',
      description: 'Where to store the file.',
      enum: ['base64', 'url', 's3', 'azure'],
      default: 'url'
    },
    url: {
      type: 'string',
      title: 'Upload URL',
      description: 'The URL where the file will be uploaded.'
    },
    dir: {
      type: 'string',
      title: 'Directory',
      description: 'The directory where the file should be uploaded.'
    },
    filePattern: {
      type: 'string',
      title: 'File Pattern',
      description: 'The allowed file types.',
      default: '*'
    },
    fileMinSize: {
      type: 'string',
      title: 'Minimum Size',
      description: 'The minimum file size allowed.'
    },
    fileMaxSize: {
      type: 'string',
      title: 'Maximum Size',
      description: 'The maximum file size allowed.'
    },
    imageSize: {
      width: {
        type: 'number',
        title: 'Image Width',
        description: 'The width of the image if it is an image file.'
      },
      height: {
        type: 'number',
        title: 'Image Height',
        description: 'The height of the image if it is an image file.'
      }
    },
    webcam: {
      type: 'boolean',
      title: 'Enable Webcam',
      description: 'Enable webcam capture for image upload.'
    },
    privateDownload: {
      type: 'boolean',
      title: 'Private Download',
      description: 'Force the download of files to go through the API.'
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
  validation: {
    required: {
      type: 'boolean',
      title: 'Required',
      description: 'A required field must have a file uploaded before the form can be submitted.'
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
    borderRadius: ''
  },
  uploadOptions: {
    headers: [],
    params: {},
    keyName: '',
    withCredentials: false,
    timeout: 0
  },
  fileTypes: {
    image: {
      extensions: ['jpg', 'jpeg', 'png', 'gif'],
      maxSize: '10MB'
    },
    document: {
      extensions: ['pdf', 'doc', 'docx', 'xls', 'xlsx'],
      maxSize: '20MB'
    },
    archive: {
      extensions: ['zip', 'rar', '7z'],
      maxSize: '50MB'
    }
  },
  persistent: true,
  protected: false,
  autofocus: false,
  tabindex: '',
  imageUpload: false,
  fileUpload: true,
  webcamOnly: false
};
