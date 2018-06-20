import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) { }

  user = {};
  username;
  userId;
  courseId;
  firstName;
  lastName;
  phone;
  email;
  courseName;
  course;
  address;
  password;
  sections = [];
  role;
  update(username, firstName, lastName, phone, email, address) {
    this.service
      .updateUser(username, firstName, lastName, phone, email, address)
      .then((user) => {
        this.username = user.username ;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.phone = user.phone;
        this.address = user.address;
        this.email = user.email;
      })
  }
  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  ngOnInit() {
    this.service
      .profile()
      .then(response => response.status === 503 ?
        this.router.navigate(['login'])
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
      )
    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }
  func(response) {
    return response.json();
  }
  unEnroll(section){
    this.sectionService
        .unEnrollFromSection(section._id)
        .then(() => this.sectionService.findSectionsForStudent()
          .then(sections => this.sections = sections ));
  }

}
