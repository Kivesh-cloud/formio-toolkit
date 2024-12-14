export const wizardComponent = {
  type: 'wizard',
  title: 'Wizard',
  group: 'layout',
  icon: 'fa fa-magic',
  selector: 'wizard',
  template: `<div class="formio-wizard" [ngClass]="component.customClass">
    <div class="wizard-header" *ngIf="!component.hideHeader">
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <h3 class="wizard-title" *ngIf="component.title">{{ component.title }}</h3>
        </div>
        <ul class="nav navbar-nav">
          <li *ngFor="let page of component.pages; let i = index"
              [class.active]="i === currentPage"
              [class.disabled]="!canVisit(i)"
              [class.complete]="isComplete(i)">
            <a (click)="canVisit(i) && goToPage(i)">
              <i *ngIf="page.icon" [class]="page.icon"></i>
              {{ page.title }}
              <i *ngIf="isComplete(i)" class="fa fa-check"></i>
              <span class="wizard-page-status" *ngIf="page.error">
                <i class="fa fa-exclamation-triangle text-danger"></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="wizard-body">
      <div class="wizard-page" *ngFor="let page of component.pages; let i = index"
           [class.active]="i === currentPage">
        <div class="wizard-page-header" *ngIf="page.title">
          <h4>{{ page.title }}</h4>
        </div>
        <div class="wizard-page-body">
          <formio-component
            *ngFor="let component of page.components"
            [component]="component"
            (onChange)="onComponentChange($event)">
          </formio-component>
        </div>
      </div>
    </div>
    <div class="wizard-footer">
      <div class="wizard-buttons">
        <button *ngIf="!isFirstPage()" 
                class="btn btn-default wizard-prev-btn"
                (click)="prevPage()"
                [disabled]="component.disabled">
          <i class="fa fa-chevron-left"></i>
          {{ component.prevButton || 'Previous' }}
        </button>
        <button *ngIf="!isLastPage()" 
                class="btn btn-primary wizard-next-btn"
                (click)="nextPage()"
                [disabled]="!canNextPage() || component.disabled">
          {{ component.nextButton || 'Next' }}
          <i class="fa fa-chevron-right"></i>
        </button>
        <button *ngIf="isLastPage()" 
                class="btn btn-success wizard-submit-btn"
                (click)="submit()"
                [disabled]="!canSubmit() || component.disabled">
          {{ component.submitButton || 'Submit' }}
          <i class="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>`,
  input: false,
  key: '',
  properties: {
    pages: {
      type: 'array',
      title: 'Pages',
      description: 'The pages of the wizard',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          icon: { type: 'string' },
          components: { type: 'array' }
        }
      }
    },
    nextButton: {
      type: 'string',
      title: 'Next Button Text',
      description: 'The text to show on the next button'
    },
    prevButton: {
      type: 'string',
      title: 'Previous Button Text',
      description: 'The text to show on the previous button'
    },
    submitButton: {
      type: 'string',
      title: 'Submit Button Text',
      description: 'The text to show on the submit button'
    },
    hideHeader: {
      type: 'boolean',
      title: 'Hide Header',
      description: 'Hide the wizard header'
    },
    navigatePages: {
      type: 'boolean',
      title: 'Navigate Pages',
      description: 'Allow navigation between pages'
    },
    saveOnPageChange: {
      type: 'boolean',
      title: 'Save on Page Change',
      description: 'Save form data when changing pages'
    },
    showPageNumbers: {
      type: 'boolean',
      title: 'Show Page Numbers',
      description: 'Show page numbers in navigation'
    },
    showPageTitles: {
      type: 'boolean',
      title: 'Show Page Titles',
      description: 'Show page titles in navigation'
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
    headerBackgroundColor: '',
    headerTextColor: '',
    navigationBackgroundColor: '',
    navigationTextColor: '',
    activePageBackgroundColor: '',
    activePageTextColor: '',
    completedPageBackgroundColor: '',
    completedPageTextColor: '',
    buttonSpacing: ''
  }
};
