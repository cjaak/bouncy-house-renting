import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  searchFilterSubject: Subject<string> = new Subject<string>()



  filterSubject: Subject<Map<string, any>> = new Subject<Map<string, any   >>()

  constructor() { }
}
