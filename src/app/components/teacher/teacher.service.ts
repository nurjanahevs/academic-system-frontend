import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { classTeacher } from 'src/app/interface/IClass';
import { student, studentScore } from 'src/app/interface/IScore';
import { TeacherData } from 'src/app/interface/ITeacher';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  getSpesificTeacher(id: string): Observable<HttpResponse<TeacherData>> {
    return this.http.get<TeacherData>(API_URL + 'teacher/teach-class/' + id, {
      headers: new HttpHeaders({
        Authorization: this.tokenStorageService.getToken()!,
      }),
      responseType: 'json',
      observe: 'response',
    });
  }

  getClassTeacher(_id: string): Observable<HttpResponse<classTeacher>> {
    return this.http.get<classTeacher>(`${API_URL}teacher/class/${_id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  getSpesificScore(_id: string): Observable<HttpResponse<student>> {
    return this.http.get<student>(`${API_URL}teacher/score/${_id}`, {
      headers: new HttpHeaders({
        Authorization: this.tokenStorageService.getToken()!,
      }),
      responseType: 'json',
      observe: 'response',
    });
  }

  getScoreStudentSpesific(_id: string): Observable<HttpResponse<studentScore>> {
    return this.http.get<studentScore>(
      `${API_URL}teacher/score/student/${_id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  manageScoreStudent(
    _id: string,
    dailyScore: string,
    midtest: string,
    finaltest: string
  ): Observable<HttpResponse<studentScore>> {
    const scoreData = { dailyScore, midtest, finaltest };
    return this.http.put<studentScore>(
      `${API_URL}teacher/score/manageScore/${_id}`,
      scoreData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }
}
