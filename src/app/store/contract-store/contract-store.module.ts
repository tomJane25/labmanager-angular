import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ContractEffects } from './effects';
import { contractReducer } from './reducer';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('contract', contractReducer),
    EffectsModule.forFeature([ContractEffects])
  ],
  providers: [ContractEffects]
})
export class ContractStoreModule { }
