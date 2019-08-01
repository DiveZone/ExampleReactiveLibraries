import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AirlinesEffects } from './_store/airlines.effects';
import { AirlinesService } from './_store/airlines.service';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';
import { AirlinesComponent } from './airlines.component';
import { StoreModule } from '@ngrx/store';
import { airlinesReducer } from './_store/airlines.reducer';
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
