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
  direction = 'asc';
  sortedColumn = '';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentsList().subscribe((data: any) => {
      this.studentsList = data.students;

      if (this.studentsList.length) {
        this.studentListKeys = Object.keys(this.studentsList[0]);
        this.numberSort(this.studentListKeys[0]); // default sort by user id.
      }
    });
  }

  numberSort(columnType) {
    if (this.direction == "asc") {
      this.studentsList = this.studentsList.sort(function(a, b) {
        return a[columnType] - b[columnType];
      });
      this.direction = 'desc';
    } else {
      this.studentsList = this.studentsList.sort(function(a, b) {
        return  b[columnType] - a[columnType];
      });
      this.direction = 'asc';
    }
    this.sortedColumn = columnType;
  }

  stringSort(columnType) {
    if (this.direction == "asc") {
      this.studentsList = this.studentsList.sort(function(a, b) {
        const nameA = a[columnType].toUpperCase();
        const nameB = b[columnType].toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
      });
      this.direction = 'desc';
    } else {
      this.studentsList = this.studentsList.sort(function(a, b) {
        const nameA = a[columnType].toUpperCase();
        const nameB = b[columnType].toUpperCase();

        if (nameA > nameB) {
          return -1;
        }
      });
      this.direction = 'asc';
    }
    this.sortedColumn = columnType;
  }

  sortBy(columnType) {
    if (this.sortedColumn != columnType) {
      this.direction = 'asc'; // set to default sorting option if another column is clicked.
    }
    if (columnType == 'userId' || columnType == 'class') {
      this.numberSort(columnType);
    } else {
      this.stringSort(columnType);
    }
  }
}
