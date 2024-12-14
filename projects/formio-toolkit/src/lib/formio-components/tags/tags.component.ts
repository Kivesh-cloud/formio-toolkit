export const tagsComponent = {
  type: 'tags',
  title: 'Tags',
  group: 'advanced',
  icon: 'fa fa-tags',
  selector: 'tags',
  template: `<div class="form-group tags-component" [ngClass]="{'has-error': component.error}">
    <label *ngIf="!component.hideLabel" [attr.for]="component.key" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div class="tags-input-wrapper">
      <div class="tags-list">
        <span *ngFor="let tag of component.tags; let i = index" class="tag">
          {{ tag }}
          <button type="button" 
                  class="btn btn-xs btn-danger tag-remove" 
                  (click)="removeTag(i)"
                  [disabled]="component.disabled">
            <i class="fa fa-times"></i>
          </button>
        </span>
      </div>
      <div class="tag-input">
        <input type="text"
               [id]="component.key"
               class="form-control"
               [name]="component.key"
               [placeholder]="component.placeholder"
               [disabled]="component.disabled"
               [maxlength]="component.maxTags ? undefined : component.maxLength"
               [(ngModel)]="inputValue"
               (keydown.enter)="addTag($event)"
               (keydown.comma)="addTag($event)"
               (blur)="onBlur()">
      </div>
    </div>
    <div class="tags-limit-message" *ngIf="component.maxTags && component.tags.length >= component.maxTags">
      Maximum number of tags reached
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
    delimeter: {
      type: 'string',
      title: 'Delimeter',
      description: 'Character to split tags'
    },
    maxTags: {
      type: 'number',
      title: 'Maximum Tags',
      description: 'Maximum number of tags allowed'
    },
    storeas: {
      type: 'string',
      title: 'Store As',
      description: 'Store tags as string or array',
      enum: ['string', 'array']
    },
    lowercase: {
      type: 'boolean',
      title: 'Lowercase',
      description: 'Convert tags to lowercase'
    },
    uniqueTags: {
      type: 'boolean',
      title: 'Unique Tags',
      description: 'Prevent duplicate tags'
    },
    allowedTags: {
      type: 'array',
      title: 'Allowed Tags',
      description: 'List of allowed tags'
    },
    suggestedTags: {
      type: 'array',
      title: 'Suggested Tags',
      description: 'List of suggested tags'
    }
  },
  style: {
    margin: '',
    padding: '',
    'font-size': '',
    'background-color': '',
    'border-radius': '',
    'tag-background': '',
    'tag-color': '',
    'tag-border': '',
    'tag-border-radius': '',
    'remove-button-color': '',
    'remove-button-background': ''
  }
};
