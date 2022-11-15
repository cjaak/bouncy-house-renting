import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import { Rented } from '../../../shared/models/rented.model';
import { BouncyHouse } from '../../../shared/models/bouncy-house.model';

@Injectable({
  providedIn: 'root',
})
export class CachingService {
  // @ts-ignore
  userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  rentedSubject: BehaviorSubject<Rented> = new BehaviorSubject<Rented>(
    new Rented()
  );
  bouncyHouseSubject: BehaviorSubject<BouncyHouse> =
    new BehaviorSubject<BouncyHouse>(new BouncyHouse());

  constructor() {}
}
