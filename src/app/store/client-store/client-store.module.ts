import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ClientEffects } from './effects';
import { clientReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('client', clientReducer),
    EffectsModule.forFeature([ClientEffects])
  ],
  providers: [ClientEffects]
})
export class ClientStoreModule { }
