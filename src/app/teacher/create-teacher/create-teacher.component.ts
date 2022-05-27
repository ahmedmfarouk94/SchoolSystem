import { teacherService } from './../../shared/teacher.service';
import { Teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  Teacher : Teacher = new Teacher();
  constructor(private ser : teacherService , private router : Router) { }

  ngOnInit(): void {
  }

  save(){
this.ser.post(this.Teacher).subscribe((data:any)=>{
this.router.navigateByUrl('Lt');
})
  }
}
