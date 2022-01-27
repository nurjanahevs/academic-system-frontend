import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeacherData } from '../interface/ITeacher';
import { TokenStorageService } from './token-storage.service';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  // getTeacher(id: string): Observable<HttpResponse<TeacherData>> {
  //   console.log(id)
  //   return this.http.get<TeacherData>(API_URL + 'teacher/' + id, {
  //     headers: new HttpHeaders({
  //       Authorization: this.tokenStorageService.getToken()!,
  //     }),
  //     responseType: 'json',
  //     observe: 'response',
  //   });
  // }
}
