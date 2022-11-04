import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  handleSearchFilter(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.filterService.searchFilterSubject.next(filterValue);
  }
}
