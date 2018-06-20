import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    (username == null || password == null) ? alert("Please enter valid credentials") :
    this.service
      .login(username, password)
      .then((response) => { response.errorLogin === 0 ? alert("No such user exists") :
        this.router.navigate(['profile']);
      });
  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
    this.service
      .profile()
      .then(response => response.status === 503 ?
        this.router.navigate(['login'])
        : this.router.navigate(['home'])
      );
  }
  func(response) {
    return response.json();
  }

}
