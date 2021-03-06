import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {CourseServiceClient} from "../services/course.service.client";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private service: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }
  username;
  userId;
  firstName;
  lastName;
  phone;
  email;
  address;
  sectionName = '';
  seats = '';
  buttonType = 'Add'
  courseId = '';
  sectionId = '';
  course;
  role;
  courseName;
  sections = [];
  setParams(params) {
    this.userId = params['userId'];
    this.courseId = params['courseId'];
    this.loadSections(params['courseId']);
  }
  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
    this
      .courseService
      .findCourseById(this.courseId)
      .then(course => {this.courseName = course.title; this.sectionName = course.title + ' Section ' + this.sections.length;} );
  }
  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats, this.courseName)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  deleteSection(section) {
    this
      .service
      .deleteSection(section, section._id)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }
  populate(section){
    this.sectionName = section.name;
    this.seats = section.seats;
    this.buttonType = 'Update';
    this.sectionId = section._id;
  }
  updateSection(name, seats) {
    this.service
      .updateSection(name, seats, this.courseId, this.sectionId)
      .then((section) => {
        this.loadSections(this.courseId);
      })
    this.buttonType = 'Add';
    this.sectionName = '' ;
    this.seats = '';
  }
  operationSection(sectionName, seats){
    if(this.buttonType === 'Add') {
      this.createSection(sectionName, seats);
    } else{
      this.updateSection(sectionName, seats);
    }
  }
  enroll(section) {
    this.service
      .enrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(response => response.status === 503 ?
        this.router.navigate(['login'])
        : this.func(response)
          .then((user) => {
            this.role = user.role;
            this.username = user.username ;
            this.firstName = user.firstName ;
            this.lastName = user.lastName ;
            this.phone = user.phone ;
            this.address = user.address ;
            this.email = user.email ;
            this.userId = user._id ; })
      );
  }
  func(response) {
    return response.json();
  }
  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

}
