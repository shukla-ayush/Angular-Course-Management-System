import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courses: Course[] = [];
  userId;
  setParams(params) {
    this.userId = params['userId'];
  }
  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
