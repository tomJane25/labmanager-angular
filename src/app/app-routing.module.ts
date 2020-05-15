import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ui/components/home/home.component';
import { ClientsComponent } from './containers/clients/clients.component';
import {ContractsComponent} from './containers/contracts/contracts.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'clients',
    pathMatch: 'full',
    component: ClientsComponent
  },
  {
    path: 'contracts',
    pathMatch: 'full',
    component: ContractsComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
