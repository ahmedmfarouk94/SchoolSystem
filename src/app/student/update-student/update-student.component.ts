import { StudentService } from './../../shared/student.service';
import { APIFunctionService } from 'src/app/shared/apifunction.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student : Student = new Student;
  id;
  constructor(private ser :StudentService ,private activeRoute : ActivatedRoute , private router: Router) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.ser.getById(this.id).subscribe((data)=>{
      this.student=data;
    })
   }

  ngOnInit(): void {
  }

  update(){
    this.ser.put(this.student, this.id).subscribe((data)=>{
      this.router.navigateByUrl('Ls');
    })
  }

}
