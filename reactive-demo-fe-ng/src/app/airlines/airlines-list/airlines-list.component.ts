import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {take, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Airline} from '../airlines.model';
import {AirlinesService} from '../airlines.service';
import {UntilDestroy} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'demo-airlines-list',
  templateUrl: './airlines-list.component.html'
})
export class AirlinesListComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns = ['favorite', 'id', 'name', 'iata', 'icao', 'callsign'];

  dataSource: MatTableDataSource<Airline> = new MatTableDataSource<Airline>();

  @Input() country: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _service: AirlinesService) {
  }

  ngOnInit() {
    this.updateList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateList();
  }

  private updateList() {
    this._service.getAirlineList(this.country)
      .subscribe({
          next: (airlines) => {
            this.dataSource.data = airlines;
          },
          error: () => {
            this.dataSource.data = [];
          }
        }
      );
  }

  updateFavorite(id: number, favorite: boolean) {
    this._service.setFavorite(id, favorite).pipe(
      take(1)
    ).subscribe(next => this.updateList());
  }
}
