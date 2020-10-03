import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-detail-list',
  templateUrl: './student-detail-list.component.html',
  styleUrls: ['./student-detail-list.component.css']
})
export class StudentDetailListComponent implements OnInit {
  studList = []
  constructor( public studService: StudentService) { }

  ngOnInit(): void {
    this.studList = this.studService.studentList;
  }
  showTotal(stud){
    this.studService.showTotal(stud);
  }
}
