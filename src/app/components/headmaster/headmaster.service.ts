import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassData, editClass } from 'src/app/interface/IClass';
import { CourseData, setCourse } from 'src/app/interface/ICourse';
import { GradeData } from 'src/app/interface/IGrade';
import {
  editHomeroom,
  HomeClass,
  HomeroomData,
  HomeStudent,
  HomeTeach,
} from 'src/app/interface/IHomeroom';
import {
  editParent,
  getParent,
  ParentData,
  statusActiveParent,
  statusDeadActiveParent,
} from 'src/app/interface/IParent';
import {
  ResDataClass,
  ResDataStudent,
  ResponseData,
} from 'src/app/interface/IResponse';
import { Schedule, scheduleSpesific } from 'src/app/interface/ISchedule';
import { addScore, ScoreData, student } from 'src/app/interface/IScore';
import {
  editStudent,
  statusStudent,
  StudentData,
  StudentSpesific,
  toActive,
} from 'src/app/interface/IStudent';
import {
  CourseTeacher,
  editTeacher,
  TeacherData,
} from 'src/app/interface/ITeacher';
import { IYearAcademic } from 'src/app/interface/IYearAcademic';
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
    classBefore: string,
    classAfter: string
  ): Observable<HttpResponse<editStudent>> {
    const studentData = { fullName, birthDate, classBefore, classAfter };
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

  changeStatusStudent(
    _id: string,
    toDeadActive: string
  ): Observable<HttpResponse<statusStudent>> {
    const statusStudent = { toDeadActive };
    return this.http.put<statusStudent>(
      `${API_URL}headmaster/student/to-deadactive/${_id}`,
      statusStudent,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  changeStatusStudentToActive(
    _id: string,
    toActive: string
  ): Observable<HttpResponse<toActive>> {
    const statusStudent = { toActive };
    return this.http.put<toActive>(
      `${API_URL}headmaster/student/to-active/${_id}`,
      statusStudent,
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

  createCourse(course: string): Observable<HttpResponse<CourseData>> {
    const courseData = { course };
    return this.http.post<CourseData>(
      `${API_URL}headmaster/course/create`,
      courseData,
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

  getSpesificCourse(_id: string): Observable<HttpResponse<CourseData>> {
    return this.http.get<CourseData>(`${API_URL}headmaster/course/${_id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  editCourse(
    _id: string,
    course: string
  ): Observable<HttpResponse<CourseData>> {
    const courseData = { course };
    return this.http.put<CourseData>(
      `${API_URL}headmaster/course/${_id}`,
      courseData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  editCourseSpesific(
    teacher: TeacherData,
    courseBefore: string,
    courseAfter: string
  ): Observable<HttpResponse<setCourse>> {
    const editData = { teacher, courseBefore, courseAfter };
    return this.http.post<setCourse>(
      `${API_URL}headmaster/course/update-course`,
      editData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  createParent(
    emailSend: string,
    father: string,
    mother: string,
    birthDate: string,
    student: StudentData
  ): Observable<HttpResponse<ParentData>> {
    const parentData = { emailSend, father, mother, birthDate, student };
    return this.http.post<ParentData>(
      `${API_URL}headmaster/parent/create`,
      parentData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  getParent(): Observable<HttpResponse<getParent>> {
    return this.http.get<getParent>(`${API_URL}headmaster/parent`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  getSpesificParent(_id: string): Observable<HttpResponse<getParent>> {
    return this.http.get<getParent>(`${API_URL}headmaster/parent/${_id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  editParent(
    _id: string,
    father: string,
    mother: string,
    birthDate: string,
    addStudent: Array<StudentData>
  ): Observable<HttpResponse<editParent>> {
    const parentData = { father, mother, birthDate, addStudent };
    return this.http.put<editParent>(
      `${API_URL}headmaster/parent/${_id}`,
      parentData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  toActiveParent(
    _id: string,
    toActive: string
  ): Observable<HttpResponse<statusActiveParent>> {
    const activeParent = { toActive };
    return this.http.put<statusActiveParent>(
      `${API_URL}headmaster/parent/to-active/${_id}`,
      activeParent,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  toDeadActiveParent(
    _id: string,
    toDeadActive: string
  ): Observable<HttpResponse<statusDeadActiveParent>> {
    const deadActiveParent = { toDeadActive };
    return this.http.put<statusDeadActiveParent>(
      `${API_URL}headmaster/parent/to-deadactive/${_id}`,
      deadActiveParent,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  getHomeroom(): Observable<HttpResponse<HomeroomData>> {
    return this.http.get<HomeroomData>(`${API_URL}headmaster/homeroom`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  getSpesificHomeroom(_id: string): Observable<HttpResponse<HomeroomData>> {
    return this.http.get<HomeroomData>(`${API_URL}headmaster/homeroom/${_id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  getScoreByHomeroom(_id: string): Observable<HttpResponse<HomeStudent>> {
    return this.http.get<HomeStudent>(
      `${API_URL}headmaster/homeroom/student/${_id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  setTeacherForHome(
    homeroomName: HomeTeach,
    className: HomeClass
  ): Observable<HttpResponse<HomeroomData>> {
    const homeTeacher = { homeroomName, className };
    return this.http.post<HomeroomData>(
      `${API_URL}headmaster/homeroom/set-roomteacher`,
      homeTeacher,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  editHomeroom(
    _id: string,
    homeroomName: string,
    classBefore: string,
    classAfter: string
  ): Observable<HttpResponse<editHomeroom>> {
    const dataHome = { homeroomName, classBefore, classAfter };
    return this.http.put<editHomeroom>(
      `${API_URL}headmaster/homeroom/change/${_id}`,
      dataHome,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  getScoreStudent(className: string): Observable<HttpResponse<ScoreData>> {
    const scoreData = { className };
    return this.http.post<ScoreData>(`${API_URL}headmaster/score`, scoreData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  getSpesificScore(_id: string): Observable<HttpResponse<student>> {
    return this.http.get<student>(`${API_URL}headmaster/score/${_id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  addScoreToStudent(
    student: string,
    course: string
  ): Observable<HttpResponse<addScore>> {
    const scoreData = { student, course };
    return this.http.post<addScore>(
      `${API_URL}headmaster/score/create`,
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

  getGradeStudent(className: string): Observable<HttpResponse<GradeData>> {
    const gradeData = { className };
    return this.http.post<GradeData>(
      `${API_URL}headmaster/grade/getGradeStudent`,
      gradeData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  addNewSchedule(
    title: string,
    start: Date,
    end: Date,
    classes: string,
    daysOfWeek: string,
    allDay: Boolean
  ): Observable<HttpResponse<Schedule>> {
    const scheduleData = {
      title,
      start,
      end,
      classes,
      daysOfWeek,
      allDay,
    };
    return this.http.post<Schedule>(
      `${API_URL}headmaster/calendar/create`,
      scheduleData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  getAllSchedule(): Observable<HttpResponse<scheduleSpesific>> {
    return this.http.get<scheduleSpesific>(`${API_URL}headmaster/calendar`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  getYearAcademic(): Observable<HttpResponse<IYearAcademic>> {
    return this.http.get<IYearAcademic>(`${API_URL}headmaster/yearAcademic`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.tokenStorageService.getToken()!,
      }),
      observe: 'response',
    });
  }

  studentByYear(yearAcademic: string): Observable<HttpResponse<IYearAcademic>> {
    const year = { yearAcademic };
    return this.http.post<IYearAcademic>(
      `${API_URL}headmaster/yearAcademic/searching-student`,
      year,
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
