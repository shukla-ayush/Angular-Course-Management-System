import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: UserServiceClient,
              private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }
  role;
  username;
  firstName;
  lastName;
  phone;
  address;
  email;
  userId;
  setParams(params) {
    this.userId = params['userId'];
  }
  ngOnInit() {
    this.service
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
  }
  func(response) {
    return response.json();
  }
  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
}
