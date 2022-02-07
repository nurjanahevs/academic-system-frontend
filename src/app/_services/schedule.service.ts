import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';
import { scheduleSpesific } from '../interface/ISchedule';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  private getDataEvent(response: any) {
    return response.data;
  }

  addEvent(event: any): Observable<any> {
    return this.http.post<any>('http://localhost:3535/api/addEvent', event);
  }
  getEvent(): Observable<any> {
    return this.http.get<any>('http://localhost:3535/api/getEvent');
  }

  getSpecScheduleHeadmaster(_id: string): Observable<HttpResponse<scheduleSpesific>> {
    return this.http.get<scheduleSpesific>(
      `${API_URL}headmaster/calendar/${_id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  getSpecScheduleStudent(_id: string): Observable<HttpResponse<scheduleSpesific>> {
    return this.http.get<scheduleSpesific>(
      `${API_URL}student/calendar/${_id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.tokenStorageService.getToken()!,
        }),
        observe: 'response',
      }
    );
  }

  getSpecScheduleTeacher(_id: string): Observable<HttpResponse<scheduleSpesific>> {
    return this.http.get<scheduleSpesific>(
      `${API_URL}teacher/calendar/${_id}`,
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
