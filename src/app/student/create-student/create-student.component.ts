import { StudentService } from './../../shared/student.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { APIFunctionService } from 'src/app/shared/apifunction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student : Student = new Student();
  constructor(private ser : StudentService , private router : Router) { }

  ngOnInit(): void {
  }

  save(){
this.ser.post(this.student).subscribe((data:any)=>{
this.router.navigateByUrl('Ls');
})
  }
}
