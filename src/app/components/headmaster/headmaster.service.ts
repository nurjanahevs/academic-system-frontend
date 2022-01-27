import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ResDataClass,
  ResDataStudent,
  ResponseData,
} from 'src/app/interface/IResponse';
import { StudentData } from 'src/app/interface/IStudent';
import { TeacherData } from 'src/app/interface/ITeacher';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class HeadmasterService {
  teacher: TeacherData[] = [];
  student: StudentData[] = [];
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
    fullName: string,
    email: string,
    birthDate: string,
    classes: string
  ): Observable<HttpResponse<ResDataStudent>> {
    const studentData = { email, fullName, birthDate, classes };
    return this.http.post<ResDataStudent>(
      `${API_URL}headmaster/student/create`,
      studentData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  getStudent(): Observable<HttpResponse<StudentData[]>> {
    return this.http.get<StudentData[]>(`${API_URL}headmaster/student`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  createClass(
    className: string,
    yearAcademic: number,
    semester: string
  ): Observable<HttpResponse<ResDataClass>> {
    const classData = { className, yearAcademic, semester };
    console.log(classData)
    return this.http.post<ResDataClass>(
      `${API_URL}headmaster/class/create`,
      classData,
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
