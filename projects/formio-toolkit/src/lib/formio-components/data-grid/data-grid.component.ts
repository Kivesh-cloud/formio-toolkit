export const dataGridComponent = {
  type: 'data-grid',
  title: 'Data Grid',
  group: 'advanced',
  icon: 'fa fa-th',
  selector: 'data-grid',
  template: `<div class="formio-data-grid">
    <label *ngIf="!component.hideLabel" class="control-label">
      {{ component.label }}
      <span class="field-required" *ngIf="component.validate?.required">*</span>
    </label>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th *ngFor="let col of component.columns">{{ col.label }}</th>
            <th *ngIf="!component.hideAddButton" class="text-center">
              <button class="btn btn-default" (click)="addRow()">
                <i class="fa fa-plus"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of component.rows; let rowIndex = index">
            <td *ngFor="let col of component.columns">
              <formio-component
                [component]="col"
                [data]="row"
                [row]="rowIndex"
                (onChange)="onCellChange($event, rowIndex, col.key)">
              </formio-component>
            </td>
            <td *ngIf="!component.hideRemoveButton" class="text-center">
              <button class="btn btn-danger" (click)="removeRow(rowIndex)">
                <i class="fa fa-times"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="has-error">
      <div class="help-block" *ngIf="component.error">
        {{ component.error }}
      </div>
    </div>
    <div class="help-block" *ngIf="component.description">
      {{ component.description }}
    </div>
  </div>`,
  input: true,
  key: '',
  properties: {
    columns: {
      type: 'array',
      title: 'Columns',
      description: 'The columns configuration for this grid.'
    },
    rows: {
      type: 'array',
      title: 'Rows',
      description: 'The rows data for this grid.'
    },
    hideAddButton: {
      type: 'boolean',
      title: 'Hide Add Button',
      description: 'Hide the add row button.'
    },
    hideRemoveButton: {
      type: 'boolean',
      title: 'Hide Remove Button',
      description: 'Hide the remove row button.'
    }
  }
};
