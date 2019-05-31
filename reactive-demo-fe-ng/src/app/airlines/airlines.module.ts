import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
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
