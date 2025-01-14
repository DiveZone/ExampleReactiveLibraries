import { AfterViewInit, Component, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { Favorize } from '../_store/airlines.actions';
import { Observable } from 'rxjs';
import { Airline } from '../_store/airlines.model';
import { MatIconButton } from '@angular/material/button';

import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'demo-airlines-list',
    templateUrl: './airlines-list.component.html',
    imports: [MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatIconButton, MatIcon, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class AirlinesListComponent implements AfterViewInit {

  displayedColumns = ['favorite', 'id', 'name', 'iata', 'icao', 'callsign'];

  dataSource: MatTableDataSource<Airline> = new MatTableDataSource<Airline>();

  readonly paginator = viewChild(MatPaginator);

  @Select() airlines$: Observable<Airline[]>;

  constructor(private _store: Store) {
    this.airlines$
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (airlines) => {
          this.dataSource.data = airlines;
        },
        error: () => {
          this.dataSource.data = [];
        }
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator();
  }

  updateFavorite(id: number, favorite: boolean) {
    this._store.dispatch(new Favorize({
      id: id,
      favorite: favorite
    }));
  }
}
