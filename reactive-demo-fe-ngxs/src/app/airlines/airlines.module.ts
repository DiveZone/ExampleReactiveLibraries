import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgxsModule } from '@ngxs/store';
import { AirlinesState } from './_store/airlines.state';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';
import { AirlinesComponent } from './airlines.component';
import { AirlinesService } from './_store/airlines.service';

@NgModule({
    exports: [
        AirlinesComponent
    ], imports: [
        // ANGULAR
        CommonModule,
        // MATERIAL
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatPaginatorModule,
        MatSelectModule,
        MatTableModule,
        // NGXS
        NgxsModule.forFeature([AirlinesState]),
        AirlinesComponent,
        AirlinesListComponent
    ], providers: [
        AirlinesService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AirlinesModule {

}
