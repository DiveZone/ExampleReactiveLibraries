import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { Favorize } from 'app/airlines/_store/airlines.actions';
import { Observable ,  Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Airline } from '../_store/airlines.model';

@Component({
    selector: 'demo-airlines-list',
    templateUrl: './airlines-list.component.html'
})
export class AirlinesListComponent implements AfterViewInit, OnDestroy {

    displayedColumns = ['favorite', 'id', 'name', 'iata', 'icao', 'callsign'];

    dataSource: MatTableDataSource<Airline> = new MatTableDataSource<Airline>();

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    private disconnect$ = new Subject();

    @Select() airlines$: Observable<Airline[]>;

    constructor(private _store: Store) {
        this.airlines$
            .pipe(takeUntil(this.disconnect$))
            .subscribe(data => this.dataSource.data = data);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    ngOnDestroy() {
        this.disconnect$.next();
        this.disconnect$.complete();
    }

    updateFavorite(id: number, favorite: boolean) {
        this._store.dispatch(new Favorize({
            id: id,
            favorite: favorite
        }));
    }
}
