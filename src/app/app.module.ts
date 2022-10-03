import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './task-one/success-alert/success-alert.component';
import { WarningAlertComponent } from './task-one/warning-alert/warning-alert.component';
import { TwoWayDatabindingComponent } from './task-two/two-way-databinding/two-way-databinding.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SuccessAlertComponent, WarningAlertComponent, TwoWayDatabindingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
