import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BouncyHouseSizeEnum} from "../../../../shared/enums/size.enum";
import {BouncyHouseThemeEnum} from "../../../../shared/enums/theme.enum";
import {FormControl, FormGroup} from "@angular/forms";
import {MatOptionSelectionChange} from "@angular/material/core";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-bouncy-house-filter',
  templateUrl: './bouncy-house-filter.component.html',
  styleUrls: ['./bouncy-house-filter.component.scss']
})
export class BouncyHouseFilterComponent implements OnInit {

  sizes = Object.values(BouncyHouseSizeEnum)
  themes= Object.values(BouncyHouseThemeEnum)


  @Output() filterUpdate = new EventEmitter<any>()

  public filterForm: FormGroup;

  constructor() {

    this.filterForm = new FormGroup({
      themes: new FormControl(''),
      size: new FormControl(''),
      pricePerDay: new FormControl(''),
      withPowerConnection: new FormControl('')
    })


  }


  ngOnInit(): void {
  }

  selectChangeTheme(event: MatSelectChange) {
    console.log(event.value);
  }

  selectChangeSize(event: MatSelectChange) {
    console.log(event.value);
  }
}
