import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/_services/student.service';
import { User1 } from 'src/app/_models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'student-view',
  templateUrl: './student-view.component.html',
  styles: [ `` ]
})
export class StudentViewComponent implements OnInit  {

  student:User1[]=[];
  
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ){}

    ngOnInit(){     
       this.load()
       }
       
        load(){
          this.studentService.getStudents().subscribe(student=>{
            this.student=student
        })
      
    }
}
