import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList = [
    {id : 1 , name : 'anju' , mark1 : 1 , mark2 : 1},
    {id : 2 , name : 'ammu' , mark1 : 2 , mark2 : 2},
    {id : 3 , name : 'kikki' , mark1 : 3 , mark2 : 2},
    {id : 4 , name : 'kuttus' , mark1 : 4 , mark2 : 2},
  ]
  constructor() { }
  showTotal(student) {
    alert("Total Mark is "+ (student.mark1 + student.mark2));
  }
}
