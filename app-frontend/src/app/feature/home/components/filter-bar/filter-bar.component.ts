import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterService} from "../../services/filter.service";
import {Sort} from "@angular/material/sort";
import {FormControl, FormGroup} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";
import {BouncyHouseSizeEnum} from "../../../../shared/enums/size.enum";
import {BouncyHouseThemeEnum} from "../../../../shared/enums/theme.enum";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  isSortExtended = false
  isFilterExtended = false

  activeSort: Sort = {direction: "asc", active: ""}

  activeArrow: number = 0;

  sortArrows = ["arrow_upward", "arrow_downward"];

  sizes = Object.values(BouncyHouseSizeEnum)
  themes= Object.values(BouncyHouseThemeEnum)

  activeFilter = new Map<string, any>();


  public form: FormGroup;


  constructor(private filterService: FilterService) {
    this.form = new FormGroup({
      sort: new FormControl(""),
      themes: new FormControl(this.themes),
      sizes: new FormControl(this.sizes),
      minPrice: new FormControl(0),
      maxPrice: new FormControl(1000),
      withPowerConnection: new FormControl([true, false])
    })
  }

  ngOnInit(): void {
    for(const field in this.form.controls) {
      this.activeFilter.set(field, this.form.value[field]);
    }

    this.filterService.filterSubject.next(this.activeFilter)
  }



  handleSearchFilter(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.filterService.searchFilterSubject.next(filterValue);
  }

  extendSortMenu() {
    this.isFilterExtended = false
    this.isSortExtended = !this.isSortExtended;
  }

  extendFilterMenu() {
    this.isSortExtended = false
    this.isFilterExtended = !this.isFilterExtended;
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


  selectChangeTheme(event: MatSelectChange) {
    this.activeFilter.set("themes", event.value);
    this.filterService.filterSubject.next(this.activeFilter)
  }

  selectChangeSize(event: MatSelectChange) {
    this.activeFilter.set("sizes", event.value);
    this.filterService.filterSubject.next(this.activeFilter)
  }

  selectChangePower(event: MatSelectChange) {
    this.activeFilter.set("withPowerConnection", event.value);
    this.filterService.filterSubject.next(this.activeFilter)
  }

  inputChangeMin(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.activeFilter.set("minPrice", filterValue);
    this.filterService.filterSubject.next(this.activeFilter)
  }

  inputChangeMax(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.activeFilter.set("maxPrice", filterValue);
    this.filterService.filterSubject.next(this.activeFilter)
  }
}


