import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) {
  }
  courses: Course[] = [];
  userId;
  sections;
  username;
  firstName;
  lastName;
  phone;
  address;
  email;
  role;
  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
      this.userService
        .profile()
        .then(response => response.status === 503 ?
          this.role = null
          : this.func(response)
            .then((user) => {
              this.role = user.role ;
              this.username = user.username ;
              this.firstName = user.firstName ;
              this.lastName = user.lastName ;
              this.phone = user.phone ;
              this.address = user.address ;
              this.email = user.email ;
              this.userId = user._id ; })
        );
    this
      .sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections);
  }
  func(response) {
    return response.json();
  }
  checkCourse(id) {
    let flag = true;
    for (const sec of this.sections){
      if (sec.section == null) {
        return flag;
      }
      if (sec.section.courseId === id) {
        flag = false;
      }
    }
    return flag;
  }
  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
}






