import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User1 } from '../_models';


@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(private http: HttpClient) {}
  getStudents() {
    return this.http.get<User1[]>(`/dataSource`);
}

registerstudent(user: User1) {
    return this.http.post(`/dataSource/register`, user,);
}
editstudent(id:any){
  return this.http.get(`/dataSource`,id);
}
deletestudent(id: any) {
  return this.http.delete(`/dataSource/${id}`);
}
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

// }

