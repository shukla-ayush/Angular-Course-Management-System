import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;

  register(username, password, password2) {
    (username == null || password == null) ? alert("Username or Password cannot be empty") :
      ((password === password2) ?
          this.service.createUser(username, password)
            .then((response) => { response.errorResponse === 0 ?
              alert("Username is taken. Please provide other username.") : this.router.navigate(['profile']); } )
      : alert("Passwords do not match"));
  }

  ngOnInit() {
  }

}
