import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { HomeComponent } from './ui/components/home/home.component';
import { ClientsComponent } from './containers/clients/clients.component';
import { ClientsTableComponent } from './containers/clients/clients-table/clients-table.component';
import { ClientsAddFormComponent } from './containers/clients/clients-add-form/clients-add-form.component';
import { ClientsFilterPipe } from './ui/pipes';
import { SearchFieldComponent } from './ui/components/search-field/search-field.component';
import { ActiveButtonComponent } from './ui/components/active-button/active-button.component';
import { ContractsComponent } from './containers/contracts/contracts.component';
import { ContractsTableComponent } from './containers/contracts/contracts-table/contracts-table.component';
import { ContractsAddFormComponent } from './containers/contracts/contracts-add-form/contracts-add-form.component';
import { ContractsSearchFormComponent } from './containers/contracts/contracts-search-form/contracts-search-form.component';
import { ContractsFilterPipe } from './ui/pipes';
import { NotificationComponent } from './ui/components/notification/notification.component';
import { LoginComponent } from './ui/components/login/login.component';
import { AuthInterceptor } from './ui/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    ClientsTableComponent,
    ClientsAddFormComponent,
    ClientsFilterPipe,
    SearchFieldComponent,
    ActiveButtonComponent,
    ContractsComponent,
    ContractsTableComponent,
    ContractsAddFormComponent,
    ContractsSearchFormComponent,
    ContractsFilterPipe,
    NotificationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RootStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
