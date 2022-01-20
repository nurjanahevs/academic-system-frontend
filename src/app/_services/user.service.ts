import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classes } from '../_models/Class';
import { Score } from '../_models/Score';

const API_URL = environment.API_URL + 'api/';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getScoreClass(
    academicYear: string,
    semester: string,
    classes: string
  ): Observable<Classes> {
    return this.http.get<Classes>(
      API_URL +
        'teacher/score/search-by/' +
        academicYear +
        '/' +
        semester +
        '/' +
        classes
    );
  }

  getScoreSpecific(id: string): Observable<Score> {
    return this.http.get<Score>(API_URL + 'teacher/score/search/' + id);
  }

  updateScoreSpecific(id: string, nama: string, value: string) {
    return this.http.put(API_URL + 'teacher/score/update/' + id, {
      nama,
      value,
    });
  }
}
