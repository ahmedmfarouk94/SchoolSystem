import { Teacher } from './../models/teacher';
import { APIFunctionService } from 'src/app/shared/apifunction.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class teacherService extends APIFunctionService<Teacher>{

  constructor(http : HttpClient) {
    super("http://localhost:3000/teacher" , http)
   }
}
