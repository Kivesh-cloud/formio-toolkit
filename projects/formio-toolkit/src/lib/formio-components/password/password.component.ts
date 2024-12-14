export const passwordComponent = {
  type: 'password',
  title: 'Password',
  group: 'basic',
  icon: 'fa fa-asterisk',
  selector: 'password',
  template: `<div class="form-group" [ngClass]="{'has-error': component.error}">
    <label *ngIf="!component.hideLabel" [attr.for]="component.key" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div class="input-group">
      <input [type]="showPassword ? 'text' : 'password'"
             [id]="component.key"
             class="form-control"
             [name]="component.key"
             [placeholder]="component.placeholder"
             [required]="component.validate?.required"
             [minlength]="component.validate?.minLength"
             [maxlength]="component.validate?.maxLength"
             [pattern]="component.validate?.pattern"
             [disabled]="component.disabled"
             [readonly]="component.readonly"
             [(ngModel)]="component.value"
             (input)="onChange()"
             (blur)="onBlur()">
      <div class="input-group-addon" *ngIf="component.showStrength">
        <div class="password-strength-meter">
          <div [class]="getStrengthClass()" [style.width.%]="getStrengthPercentage()"></div>
        </div>
      </div>
      <div class="input-group-addon" *ngIf="component.showPasswordToggle">
        <button class="btn btn-default btn-sm" (click)="togglePassword()">
          <i class="fa" [ngClass]="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
        </button>
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
    showPasswordToggle: {
      type: 'boolean',
      title: 'Show Password Toggle',
      description: 'Show password visibility toggle button'
    },
    showStrength: {
      type: 'boolean',
      title: 'Show Strength',
      description: 'Show password strength indicator'
    },
    strengthColors: {
      type: 'object',
      title: 'Strength Colors',
      description: 'Colors for different password strength levels',
      properties: {
        weak: { type: 'string', default: '#FF0000' },
        medium: { type: 'string', default: '#FFFF00' },
        strong: { type: 'string', default: '#00FF00' }
      }
    },
    protected: {
      type: 'boolean',
      title: 'Protected',
      description: 'Protect the entered password'
    },
    persistent: {
      type: 'boolean',
      title: 'Persistent',
      description: 'Whether to persist the password in the database'
    },
    encrypted: {
      type: 'boolean',
      title: 'Encrypted',
      description: 'Whether to encrypt the password when stored'
    }
  },
  validation: {
    minLength: {
      type: 'number',
      title: 'Minimum Length',
      description: 'Minimum length of password'
    },
    maxLength: {
      type: 'number',
      title: 'Maximum Length',
      description: 'Maximum length of password'
    },
    pattern: {
      type: 'string',
      title: 'Pattern',
      description: 'Regular expression pattern'
    },
    customMessage: {
      type: 'string',
      title: 'Custom Error Message',
      description: 'Custom error message for validation'
    }
  }
};
