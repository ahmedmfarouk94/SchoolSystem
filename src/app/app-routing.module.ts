import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { CreateTeacherComponent } from './teacher/create-teacher/create-teacher.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';


const routes: Routes = [
  {path: "home" , component: HomeComponent},
  {path: "" , component: HomeComponent},
  {path: "Cs" , component: CreateStudentComponent},
  {path: "Ls" , component: ListStudentComponent},
  {path: "Ls/:id" , component: UpdateStudentComponent},
  {path: "Ct" , component: CreateTeacherComponent},
  {path: "Lt" , component: ListTeacherComponent},
  {path: "Lt/:id" , component: UpdateTeacherComponent},
  {path: "**", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
