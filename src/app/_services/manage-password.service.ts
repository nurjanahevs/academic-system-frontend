import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPassword, newPassword } from '../interface/IPassword';
import { TokenStorageService } from './token-storage.service';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class ManagePasswordService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  forgotPassword(role: string, email: string): Observable<IPassword> {
    const password = { role, email };
    return this.http.post<IPassword>(`${API_URL}forgot-password`, password);
  }

  changeNewPassword(
    role: string,
    email: string,
    code: string,
    password: string
  ): Observable<newPassword> {
    const newPass = { role, email, code, password };
    return this.http.put<newPassword>(`${API_URL}change-password`, newPass);
  }
}
