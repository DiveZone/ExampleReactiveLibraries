import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';

import { MatOption } from '@angular/material/core';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';

@Component({
    selector: 'demo-airlines',
    templateUrl: './airlines.component.html',
    imports: [MatFormField, MatSelect, MatOption, AirlinesListComponent]
})
export class AirlinesComponent {

  countries = ['Brazil', 'India', 'Mexico', 'Netherlands', 'Spain'];

}
