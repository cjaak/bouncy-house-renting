import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BouncyHouse} from "../../../../shared/models/bouncy-house.model";
import {BouncyHouseSizeEnum} from "../../../../shared/enums/size.enum";
import {BouncyHouseThemeEnum} from "../../../../shared/enums/theme.enum";

export interface DialogData {
  isEdit: boolean;
  house?: BouncyHouse;
}

@Component({
  selector: 'app-bouncy-house-form',
  templateUrl: './bouncy-house-form.component.html',
  styleUrls: ['./bouncy-house-form.component.scss']
})
export class BouncyHouseFormComponent implements OnInit {

  title: string = "New Bouncy House"
  isEdit = false
  editHouse?: BouncyHouse
  sizes = Object.values(BouncyHouseSizeEnum)
  themes= Object.values(BouncyHouseThemeEnum)

  public bouncyHouseForm: FormGroup


  constructor(public dialogRef: MatDialogRef<BouncyHouseFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if(data.isEdit){
      this.isEdit = true
      this.editHouse = data.house
      this.title = "Edit " + this.editHouse!.name
      console.log(this.editHouse);
    }

    this.bouncyHouseForm = new FormGroup({
    name: new FormControl(this.isEdit? this.editHouse!.name: '', [Validators.required]),
    pricePerDay: new FormControl(this.isEdit? this.editHouse!.pricePerDay: '', [Validators.required]),
    size: new FormControl(this.isEdit? this.editHouse!.size: '', [Validators.required]),
    theme: new FormControl(this.isEdit? this.editHouse!.theme: '', [Validators.required]),
    weightLimit: new FormControl(this.isEdit? this.editHouse!.weightLimit: '', [Validators.required]),
    constructionTimeInMinutes: new FormControl(this.isEdit? this.editHouse!.constructionTimeInMinutes : '', [Validators.required]),
    withPowerConnection: new FormControl(this.isEdit? this.editHouse!.withPowerConnection : ''),
    imageUrl: new FormControl(this.isEdit? this.editHouse!.imageUrl: '', [Validators.required]),
    description: new FormControl(this.isEdit? this.editHouse!.description: '', [Validators.required]),
    isVisible: new FormControl(this.isEdit? this.editHouse!.visible: '')
  });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){
    if(!this.bouncyHouseForm.valid){
      return
    }
    if(this.isEdit){
      console.log(this.bouncyHouseForm.value)
      this.dialogRef.close({id: this.editHouse!.id, ...this.bouncyHouseForm.value})
    }else{
      this.dialogRef.close({id: undefined, ...this.bouncyHouseForm.value})
    }
  }

  ngOnInit(): void {

  }

}
