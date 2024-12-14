import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioToolkitComponent } from './formio-toolkit.component';

describe('FormioToolkitComponent', () => {
  let component: FormioToolkitComponent;
  let fixture: ComponentFixture<FormioToolkitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormioToolkitComponent]
    });
    fixture = TestBed.createComponent(FormioToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
