import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompAComponent} from './components/comp-a/comp-a.component';
import {Service1Service} from "./services/service1.service";
import {HttpClientModule} from "@angular/common/http";
import {FormComponent} from './forms/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompBComponent } from './components/comp-b/comp-b.component';
import { StylesDirective } from './services/styles.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    FormComponent,
    CompBComponent,
    StylesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
