import { Component } from '@angular/core';
import { AirlinesService } from './_store/airlines.service';

@Component({
  selector: 'demo-airlines',
  templateUrl: './airlines.component.html'
})
export class AirlinesComponent {

  countries = ['Brazil', 'India', 'Mexico', 'Netherlands', 'Spain'];

  private _country = 'Netherlands';

  constructor(private _service: AirlinesService) {
    this._service.query(this._country);
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
    this._service.query(value);
  }

}
