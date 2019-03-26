import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Airline } from '../_store/airlines.model';
import { AirlinesService } from '../_store/airlines.service';

@Component({
  selector: 'demo-airlines-list',
  templateUrl: './airlines-list.component.html'
})
export class AirlinesListComponent implements AfterViewInit, OnDestroy {

  displayedColumns = ['favorite', 'id', 'name', 'iata', 'icao', 'callsign'];

  dataSource: MatTableDataSource<Airline> = new MatTableDataSource<Airline>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private disconnect$ = new Subject();

  constructor(private _service: AirlinesService) {
    this._service.airlines$
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
    this._service.setFavorite(id, favorite);
  }
}
