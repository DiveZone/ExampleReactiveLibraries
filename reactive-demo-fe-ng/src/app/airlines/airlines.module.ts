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
import { AirlinesListComponent } from './airlines-list/airlines-list.component';
import { AirlinesComponent } from './airlines.component';
import { AirlinesService } from 'app/airlines/airlines.service';

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
    MatTableModule
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
