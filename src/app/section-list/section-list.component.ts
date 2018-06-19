import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  sectionName = '';
  seats = '';
  buttonType = 'Add'
  courseId = '';
  sectionId = ''
  sections = [];
  userId;
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
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
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
  createUpdateSection(sectionName, seats){
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
  }

}
