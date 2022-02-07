import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IParent } from 'src/app/interface/IParent';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class ParentService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  getParent(_id: string): Observable<HttpResponse<IParent>> {
    return this.http.get<IParent>(`${API_URL}parent/${_id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  getStudentParent(_id: string): Observable<HttpResponse<IParent>> {
    return this.http.get<IParent>(`${API_URL}parent/student/${_id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }
}
