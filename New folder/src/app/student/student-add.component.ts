import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from '../_services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'student-add',
  templateUrl: './student-add.component.html',
  styles: [ `input{width:100%;padding: 10px 15px;margin:5px auto;}` ]
})
export class StudentAddComponent implements OnInit  {

  studentForm: FormGroup;
  isEdit: Boolean = false;
  msg:String = '';
  loading: boolean;
  dipary:string="";
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(){
    this.studentForm = new FormGroup({
      name: new FormControl('',[ Validators.required]),
      age: new FormControl('',[ Validators.required]),
      regno: new FormControl('',[ Validators.required]),
      dipart: new FormControl('',[ Validators.required]),
      gender: new FormControl('',[ Validators.required]),
    })
  }

  resetForm(){
    console.log('reset',this.studentForm)
    this.studentForm.reset();
  }

  
  add(){
    this.loading = true;
        this.studentService.registerstudent(this.studentForm.value)
            .pipe(first())
            .subscribe(
                data => {
                  
                })

    // if(this.studentForm.valid){
    // this.studentService.registerstudent(this.studentForm.value);
    // localStorage.setItem('dataSource',JSON.stringify(this.studentForm.value))
    //     let data = JSON.parse(localStorage.getItem("dataSource"));

      this.resetForm();
    //   console.log('this.studentService.studelost',this.studentService.getStudents(),'data',data)
    // }
    //   else {
    //   this.msg = 'Please complete form'
    // }
  }

  edit(){
    this.studentService.editstudent(this.studentForm.value).subscribe(data => {
      // console.log(this.details_form.value);
      this.studentForm.reset();
    })
    this.add()
    this.msg = '';
    if(this.studentForm.valid){
      if(this.studentService.editstudent(this.studentForm.value)){
        this.router.navigate(['/students'])
      }else {
        this.msg = 'Something went wrong'
      }
    }else {
      this.msg = 'Please complete form'
    }
  }
  
}
