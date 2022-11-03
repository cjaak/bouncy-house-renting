import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BouncyHouseSizeEnum} from "../../../../shared/enums/size.enum";
import {BouncyHouseThemeEnum} from "../../../../shared/enums/theme.enum";
import {FormControl, FormGroup} from "@angular/forms";
import {MatOptionSelectionChange} from "@angular/material/core";
import {MatSelectChange} from "@angular/material/select";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-bouncy-house-filter',
  templateUrl: './bouncy-house-filter.component.html',
  styleUrls: ['./bouncy-house-filter.component.scss']
})
export class BouncyHouseFilterComponent implements OnInit {

  sizes = Object.values(BouncyHouseSizeEnum)
  themes= Object.values(BouncyHouseThemeEnum)

  activeFilter = new Map<string, any>();

  @Input() maxPrice!: number

  @Output() filterUpdate = new EventEmitter<Map<string, any>>()



  public filterForm: FormGroup;

  constructor() {

    this.filterForm = new FormGroup({
      themes: new FormControl(this.themes),
      sizes: new FormControl(this.sizes),
      minPrice: new FormControl(0),
      maxPrice: new FormControl(0),
      withPowerConnection: new FormControl([true, false])
    })

  }


  ngOnInit(): void {
    this.filterForm.controls["maxPrice"].setValue(this.maxPrice)

     for(const field in this.filterForm.controls) {
      this.activeFilter.set(field, this.filterForm.value[field]);
    }
  }

  selectChangeTheme(event: MatSelectChange) {
    this.activeFilter.set("themes", event.value);
    this.filterUpdate.emit(this.activeFilter);
  }

  selectChangeSize(event: MatSelectChange) {
    this.activeFilter.set("sizes", event.value);
    this.filterUpdate.emit(this.activeFilter);
  }

  selectChangePower(event: MatSelectChange) {
    this.activeFilter.set("withPowerConnection", event.value);
    this.filterUpdate.emit(this.activeFilter);
  }

  inputChangeMin(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.activeFilter.set("minPrice", filterValue);
    this.filterUpdate.emit(this.activeFilter);
  }

  inputChangeMax(event: KeyboardEvent) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.activeFilter.set("maxPrice", filterValue);
    this.filterUpdate.emit(this.activeFilter);
  }
}
