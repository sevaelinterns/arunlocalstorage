import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User1 } from '../_models';
import { dataSource } from './student-interface';


@Injectable({ providedIn: 'root' })
export class StudentService {
  // private currentUserSubject: BehaviorSubject<User1>;
  // public currentUser: Observable<User1>;

  // studentList : Student[] = [];

  constructor(private http: HttpClient) {
  }
  
  // getStudents(){
  //   return this.studentList;
  // }
  // getStudent(id){
  //   let student: Student;
  //   this.studentList.map(val=>{
  //     if(val.id == id) student = val;
  //   });
  //   return student;
  // }
  // studentEdit(student){
  //   let present: Boolean = false;
  //   this.studentList.map((val, index)=>{
  //     if(val.id == student.id) {this.studentList[index] = student;present=true}
  //   });
  //   return present;

  // }

}

