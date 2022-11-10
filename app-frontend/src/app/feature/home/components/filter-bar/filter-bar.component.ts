import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterService} from "../../services/filter.service";
import {Sort} from "@angular/material/sort";
import {FormControl, FormGroup} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  isSortExtended = false

  activeSort: Sort = {direction: "asc", active: ""}

  activeArrow: number = 0;

  sortArrows = ["arrow_upward", "arrow_downward"];

  sortControl = new FormControl("");

  form = new FormGroup({
    sort: this.sortControl
  });

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }



  handleSearchFilter(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.filterService.searchFilterSubject.next(filterValue);
  }

  extendSortMenu() {
    this.isSortExtended = !this.isSortExtended;
  }

  handleSortDirection() {
    switch (this.activeSort.direction){
      case "asc":
        this.activeArrow = 1
        this.activeSort.direction = "desc"
        break;
      case "desc":
        this.activeArrow = 0
        this.activeSort.direction = "asc"
        break;
    }

    this.filterService.SortSubject.next(this.activeSort);
  }

  handleSortValueChange(event: MatSelectChange) {
    this.activeSort.active = event.value
    this.filterService.SortSubject.next(this.activeSort);

  }
}


