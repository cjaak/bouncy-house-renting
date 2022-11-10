import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Sort} from "@angular/material/sort";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  searchFilterSubject: Subject<string> = new Subject<string>()

  SortSubject: Subject<Sort> = new Subject<Sort>()

  constructor() { }
}
