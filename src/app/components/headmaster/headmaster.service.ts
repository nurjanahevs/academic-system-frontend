import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class HeadmasterService {
  constructor(private http: HttpClient) {}

  createTeacher(
    email: string,
    fullName: string,
    birthDate: string,
    course: string,
    teachClass: string
  ) {
    const teacherData = { email, fullName, birthDate, course, teachClass };
    return this.http.post<{ Message: string }>(
      `${API_URL}/headmaster/teacher/create`,
      teacherData
    );
  }

  createStudent(
    email: string,
    fullName: string,
    birthDate: string,
    classes: string
  ) {
    const studentData = { email, fullName, birthDate, classes };
    return this.http.post<{ Message: string }>(
      `${API_URL}/headmaster/student/create`,
      studentData
    );
  }
}
