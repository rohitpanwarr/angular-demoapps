import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrls: ['./table-home.component.scss']
})
export class TableHomeComponent implements OnInit {
  studentsList = [];
  studentListKeys = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentsList().subscribe((response: any) => {
      this.studentsList = response;

      if (this.studentsList.length) {
        this.studentListKeys = Object.keys(this.studentsList[0]);  
      }
    });
  }

  sortBy(target) {
    const columnType = target.getAttribute('data-type');
    const reverse = Boolean(target.getAttribute('data-reverse'));

    switch (columnType) {
      case 'userId':

        if (!reverse) {
          this.studentsList = this.studentsList.sort(function(a, b) {
            return a.phoneNumber - b.phoneNumber;
          });
        } else {
          this.studentsList = this.studentsList.sort(function(a, b) {
            return  b.phoneNumber - a.phoneNumber;
          });
        }
    }


  }

}
