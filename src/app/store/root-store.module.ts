import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ClientStoreModule } from './client-store';
import { ContractStoreModule } from './contract-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientStoreModule,
    ContractStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
