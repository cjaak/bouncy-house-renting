import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  /**
   * dummy login for admin
   * NOTE: not safe
   * @param username
   * @param password
   */
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '12345678') {
      this.setSessionUserId(1);
      return true;
    }
    return false;
  }

  /**
   * Sets userId of the authenticated user in the session storage
   * @param userId
   */
  setSessionUserId(userId: number) {
    sessionStorage.setItem('userId?', String(userId));
  }

  /**
   * Deletes userId out of session storage
   */
  deleteSessionUserId() {
    sessionStorage.removeItem('userId?');
  }

  /**
   * Gets userId of the authenticated user
   */
  getSessionUserId() {
    return Number(sessionStorage.getItem('userId?'));
  }

  /**
   * Returns whether a user is currently logged in
   */
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
