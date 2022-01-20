import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const SCORE_KEY = 'score-key';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    window.localStorage.clear();
  }

  public saveScoreUser(id: string, nama: string): void {
    window.localStorage.removeItem(SCORE_KEY);
    window.localStorage.setItem(SCORE_KEY, JSON.stringify({ id, nama }));
  }

  public getScoreUser(): string | null {
    return window.localStorage.getItem(SCORE_KEY);
  }

  public deleteScoreUser(): void {
    window.localStorage.removeItem(SCORE_KEY);
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
