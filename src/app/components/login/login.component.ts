import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: any ={};
  decoded:any={};
  msg: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }
  login() {
    console.log("here objet", this.user);
    this.userService.login(this.user).subscribe((data) => {
      if (data.user) {
        sessionStorage.setItem("token",data.user);
        this.decoded = jwtDecode(data.user);
        console.log("here data after coded", this.decoded);
        if (this.decoded.role == "client") {
          this.router.navigate(['']);

        } else {
          this.router.navigate(['admin']);
        }
      } else {
        this.msg = "please check email/pwd"
      }
    })
  }

}

