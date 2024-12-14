import { NgModule } from '@angular/core';
import { FormioModule } from '@formio/angular';
import { FormioToolkitComponent } from './formio-toolkit.component';
import { ComponentRegistryService } from './services/component-registry.service';



@NgModule({
  declarations: [
    FormioToolkitComponent
  ],
  imports: [
    FormioModule
  ],
  exports: [
    FormioToolkitComponent,
    FormioModule
  ],
  providers: [
    ComponentRegistryService
  ]
})
export class FormioToolkitModule { }
