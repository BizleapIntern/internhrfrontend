import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NbThemeModule, NbMenuModule, NbCardModule, NbListModule, NbIconModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LocationComponent } from './location/location.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbButtonModule,
    NbListModule,
    NbIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
