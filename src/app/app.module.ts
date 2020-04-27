import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './store';
import { HeaderComponent } from './ui/components/header/header.component';
import { SidebarComponent } from './ui/components/sidebar/sidebar.component';
import { ErrorMessageComponent } from './ui/components/error-message/error-message.component';
import { HomeComponent } from './ui/components/home/home.component';
import { ClientService } from './ui/services/client.service';
import { ClientsComponent } from './containers/clients/clients.component';
import { ClientsTableComponent } from './ui/components/clients/clients-table/clients-table.component';
import { ClientsAddFormComponent } from './ui/components/clients/clients-add-form/clients-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HeaderComponent,
    HomeComponent,
    ErrorMessageComponent,
    SidebarComponent,
    ClientsTableComponent,
    ClientsAddFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RootStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }























