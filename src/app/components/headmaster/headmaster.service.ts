import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/interface/IResponse';
import { TeacherData } from 'src/app/interface/ITeacher';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class HeadmasterService {
  teacher: TeacherData[] = [];
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  createTeacher(
    fullName: string,
    email: string,
    birthDate: string,
    course: string,
    teachClass: string
  ): Observable<HttpResponse<ResponseData>> {
    const teacherData = { fullName, email, birthDate, course, teachClass };
    console.log(teacherData);
    return this.http.post<ResponseData>(
      `${API_URL}headmaster/teacher/create`,
      teacherData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  getTeacher(): Observable<HttpResponse<TeacherData[]>> {
    return this.http.get<TeacherData[]>(`${API_URL}headmaster/teacher`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  createStudent(
    email: string,
    fullName: string,
    birthDate: string,
    classes: string
  ) {
    const studentData = { email, fullName, birthDate, classes };
    return this.http.post<{ Message: string }>(
      `${API_URL}headmaster/student/create`,
      studentData
    );
  }

  createClass(className: string, yearAcademic: number, semester: string) {
    const classData = { className, yearAcademic, semester };
    return this.http.post<{ Message: string }>(
      `${API_URL}headmaster/class/create`,
      classData
    );
  }
}
