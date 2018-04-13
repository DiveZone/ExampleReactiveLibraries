import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import { AirlinesEffects } from './_store/airlines.effects';
import { AirlinesService } from './_store/airlines.service';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';
import { AirlinesComponent } from './airlines.component';
import { StoreModule } from '@ngrx/store';
import { airlinesReducer } from 'app/airlines/_store/airlines.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AirlinesComponent,
    AirlinesListComponent
  ],
  imports: [
    // ANGULAR
    CommonModule,
    HttpClientModule,
    // MATERIAL
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    // NGRX
    StoreModule.forFeature('airlines', airlinesReducer),
    EffectsModule.forFeature([AirlinesEffects])
  ],
  providers: [
    AirlinesService
  ],
  exports: [
    AirlinesComponent
  ]
})
export class AirlinesModule {

}
