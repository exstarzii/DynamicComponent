import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBuilder } from './mybuilder';
import { MyCompComponent } from './my-comp/my-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { MyModule } from './mymodule.module';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MyBuilder
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
