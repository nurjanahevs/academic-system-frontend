import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthData } from '../interface/IAuth';
// import { Teacher } from '../_models/Teacher';

const API_URL = environment.API_URL + 'api/';
@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(private http: HttpClient) {}

  getClasses(id: string): Observable<AuthData> {
    return this.http.get<AuthData>(API_URL + 'teacher/class/' + id);
  }
}
