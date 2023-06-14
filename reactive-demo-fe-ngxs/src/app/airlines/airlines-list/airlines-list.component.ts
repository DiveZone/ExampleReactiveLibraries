import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { Favorize } from '../_store/airlines.actions';
import { Observable } from 'rxjs';
import { Airline } from '../_store/airlines.model';

@Component({
  selector: 'demo-airlines-list',
  templateUrl: './airlines-list.component.html'
})
export class AirlinesListComponent implements AfterViewInit {

  displayedColumns = ['favorite', 'id', 'name', 'iata', 'icao', 'callsign'];

  dataSource: MatTableDataSource<Airline> = new MatTableDataSource<Airline>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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
    this.dataSource.paginator = this.paginator;
  }

  updateFavorite(id: number, favorite: boolean) {
    this._store.dispatch(new Favorize({
      id: id,
      favorite: favorite
    }));
  }
}
