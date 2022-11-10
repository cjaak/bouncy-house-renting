import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Sort} from "@angular/material/sort";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  searchFilterSubject: Subject<string> = new Subject<string>()

  filterSubject: Subject<Map<string, any>> = new Subject<Map<string, any>>()

  SortSubject: Subject<Sort> = new Subject<Sort>()

  constructor() { }
}
