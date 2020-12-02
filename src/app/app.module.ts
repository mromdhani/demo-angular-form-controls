import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoFormControlsComponent } from './components/demo-form-controls/demo-form-controls.component';
import { DemoFormArrayComponent } from './components/demo-form-array/demo-form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormControlsComponent,
    DemoFormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
