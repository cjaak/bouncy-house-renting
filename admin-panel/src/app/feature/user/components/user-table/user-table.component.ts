import { Component, OnInit } from '@angular/core';
import {User} from "../../../../shared/models/user.model";
import {BouncyHouseFormComponent} from "../../../bouncy-house/components/bouncy-house-form/bouncy-house-form.component";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../../dataaccess/services/user.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  public users!: User[]
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'delete'];

  constructor(private dialog: MatDialog, private userService: UserService) {
    //this.users = this.userService.getAllUsers()
  }

  ngOnInit(): void {
  }

  addItemDialog() {
    const dialogRef = this.dialog.open(BouncyHouseFormComponent, {
      data: {isEdit: false}
    })
  }

  handleDelete(element: User){

  }
}
