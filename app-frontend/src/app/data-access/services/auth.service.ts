import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  setSessionUserId(userId: number) {
    sessionStorage.setItem('userId?', String(userId));
  }

  deleteSessionUserId() {
    sessionStorage.removeItem('userId?');
  }

  getSessionUserId() {
    return Number(sessionStorage.getItem('userId?'));
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('userId?');
  }
}

@Injectable()
export class MockAuthService extends AuthService {
  override isLoggedIn(): boolean {
    return true;
  }

  override getSessionUserId(): number {
    return 0;
  }
}
