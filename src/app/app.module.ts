import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleDataComponent } from './components/sample-data/sample-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxTextDiffModule } from 'ngx-text-diff';


@NgModule({
  declarations: [
    AppComponent,
    SampleDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxTextDiffModule
  ],
  entryComponents:[
    AppComponent,
    SampleDataComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
