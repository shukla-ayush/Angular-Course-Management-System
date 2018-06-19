import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }
  userId;
  setParams(params) {
    this.userId = params['userId'];
  }
  ngOnInit() {
  }
}
