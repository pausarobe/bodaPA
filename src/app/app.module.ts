import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ContactModule } from './features/contact/contact.module';
import { ContentModule } from './features/content/content.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ContentModule,
    ContactModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
