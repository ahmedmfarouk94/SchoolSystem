import { teacherService } from './../../shared/teacher.service';
import { Teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  Teacher : Teacher = new Teacher;
  id;
  constructor(private ser :teacherService ,private activeRoute : ActivatedRoute , private router: Router) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.ser.getById(this.id).subscribe((data)=>{
      this.Teacher=data;
    })
   }

  ngOnInit(): void {
  }

  update(){
    this.ser.put(this.Teacher, this.id).subscribe((data)=>{
      this.router.navigateByUrl('Lt');
    })
  }

}
