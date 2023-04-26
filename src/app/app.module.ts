import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBuilder } from './mybuilder';
import { MyCompComponent } from './my-comp/my-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { MyCompComponent2 } from './my-comp2/my-comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MyCompComponent2,
    MyBuilder
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
