import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ui/components/home/home.component';
import { ClientsComponent } from './containers/clients/clients.component';
import { ContractsComponent } from './containers/contracts/contracts.component';
import { LoginComponent } from './ui/components/login/login.component';
import { AuthGuard } from './ui/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'clients',
    pathMatch: 'full',
    component: ClientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contracts',
    pathMatch: 'full',
    component: ContractsComponent,
    canActivate: [AuthGuard]
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
