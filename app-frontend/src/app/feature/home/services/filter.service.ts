import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Sort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  searchFilterSubject: Subject<string> = new Subject<string>();

  filterSubject: BehaviorSubject<Map<string, any>> = new BehaviorSubject<
    Map<string, any>
  >(new Map<string, any>());

  SortSubject: Subject<Sort> = new Subject<Sort>();

  constructor() {}
}
