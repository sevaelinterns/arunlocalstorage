import { Component, OnInit } from '@angular/core';
import { User1 } from 'src/app/_models';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_services';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/_services/student.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styles: [ `a{text-decoration:none;color: black;display:block;padding:15px;}ul{padding:0;}li{list-style:none;}.w-50{display:inline-block;width:45%;cursor:pointer}li:hover{background:#eee}.text-right{text-align: right;}.text-center{text-align: center;}` ]
})
export class StudentListComponent implements OnInit  {

  studentForm: FormGroup;
  service:User1;
  studentList: User1[]=[];
  currentUserSubscription: Subscription;
  constructor(private studentService: StudentService,   private authenticationService: AuthenticationService,)
  {this.currentUserSubscription = this.authenticationService.currentUser1.subscribe(user => {
      this.service=user
});}

    ngOnInit(){ 
      
     this.getdata()
      // let data = JSON.parse(localStorage.getItem('dataSource'));
      // this.studentList = data
      // console.log("dataset",this .studentList)

}
getdata(){
  this.studentService.getStudents().pipe(first()).subscribe(
    data => {
      this.studentList = data})
      console.log(this.getdata())
}
deleteUser(id: number) {
  this.studentService.deletestudent(id).pipe(first()).subscribe(data => {
    console.log(data)
  })
  this.getdata();
}
}
