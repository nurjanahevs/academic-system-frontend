import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassData, editClass } from 'src/app/interface/IClass';
import { CourseData } from 'src/app/interface/ICourse';
import {
  ResDataClass,
  ResDataStudent,
  ResponseData,
} from 'src/app/interface/IResponse';
import {
  editStudent,
  StudentData,
  StudentSpesific,
} from 'src/app/interface/IStudent';
import {
  CourseTeacher,
  editTeacher,
  TeacherData,
} from 'src/app/interface/ITeacher';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class HeadmasterService {
  teacher: TeacherData[] = [];
  student: StudentData[] = [];
  course: CourseData[] = [];
  class: ClassData[] = [];
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  createTeacher(
    fullName: string,
    emailSend: string,
    birthDate: string,
    course: string,
    teachClass: string
  ): Observable<HttpResponse<ResponseData>> {
    const teacherData = { fullName, emailSend, birthDate, course, teachClass };
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

  getTeacher(): Observable<HttpResponse<CourseTeacher[]>> {
    return this.http.get<CourseTeacher[]>(`${API_URL}headmaster/teacher`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  getSpesificTeacher(id: string): Observable<HttpResponse<TeacherData>> {
    return this.http.get<TeacherData>(`${API_URL}headmaster/teacher/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  editTeacher(
    id: string,
    fullName: string,
    birthDate: string,
    course: any,
    teachClass: any
  ): Observable<HttpResponse<editTeacher>> {
    const teacherData = { fullName, birthDate, course, teachClass };
    return this.http.put<editTeacher>(
      `${API_URL}headmaster/teacher/${id}`,
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

  createStudent(
    fullName: string,
    emailSend: string,
    birthDate: string,
    classes: string,
    semester: string
  ): Observable<HttpResponse<ResDataStudent>> {
    const studentData = { emailSend, fullName, birthDate, classes, semester };
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

  getSpesificStudent(id: string): Observable<HttpResponse<StudentSpesific>> {
    return this.http.get<StudentSpesific>(
      `${API_URL}headmaster/student/${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  editStudent(
    id: string,
    fullName: string,
    birthDate: string,
    classes: any
  ): Observable<HttpResponse<editStudent>> {
    const studentData = { fullName, birthDate, classes };
    return this.http.put<editStudent>(
      `${API_URL}headmaster/student/${id}`,
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

  createClass(
    className: string,
    yearAcademic: number,
    semester: string
  ): Observable<HttpResponse<ResDataClass>> {
    const classData = { className, yearAcademic, semester };
    console.log(classData);
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

  getClass(): Observable<HttpResponse<ClassData[]>> {
    return this.http.get<ClassData[]>(`${API_URL}headmaster/class`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  getSpesificClass(_id: string): Observable<HttpResponse<ClassData>> {
    return this.http.get<ClassData>(`${API_URL}headmaster/class/${_id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  editClass(
    id: string,
    className: string,
    semester: string,
    yearAcademic: string
  ): Observable<HttpResponse<editClass>> {
    const classData = { className, yearAcademic, semester };
    return this.http.put<editClass>(
      `${API_URL}headmaster/class/${id}`,
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

  getCourse(): Observable<HttpResponse<CourseData[]>> {
    return this.http.get<CourseData[]>(`${API_URL}headmaster/course`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }
}
