import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentsList() {
    return this.http.get('https://my-json-server.typicode.com/rohitpanwarr/student-json/db');
  }
}
