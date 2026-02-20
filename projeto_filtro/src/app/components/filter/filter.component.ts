import { Component } from '@angular/core';
import { IFilterOptions } from 'src/app/interfaces/filter-options.Interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };
  //Para inciar sem nenhum valor

  dateSelected(date:  Date) {
    console.log(date);
  }

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false }

  ]

  onFilter() {
    console.log(this.filterOptions);
  }

}
