import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  setSessionUserId(userId: string) {
    sessionStorage.setItem('userId', userId);
  }

  deleteSessionUserId() {
    sessionStorage.removeItem('userId');
  }

  getSessionUserId() {
    return sessionStorage.getItem('userId');
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('userId');

  }
}

@Injectable()
export class MockAuthService extends AuthService {
  override isLoggedIn(): boolean {
    return true;
  }

  override getSessionUserId(): string | null {
    return 'userId';
  }
}

