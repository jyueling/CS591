import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http'; // <-- Http Services

import { AppComponent } from './app.component';
import { CatComponent } from './UrlData/cat.component';
import { RouteModule } from './route.module';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
