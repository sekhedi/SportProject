import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent implements OnInit {
  signupForm!: FormGroup;
  path: any;
  msg:any;
  constructor(private formBuilder: FormBuilder, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmPwd: [''],
      tel: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
  }
  signup() {
    if (this.path == "/inscriptionAdmin") {
      this.signupForm.value.role = "admin";
    } else {
      this.signupForm.value.role = "client";
    }
    
    this.userservice.addUser(this.signupForm.value).subscribe((response) => {
      console.log("here response after signup", response);
        if (response.msg=="is added valid") {
          this.router.navigate(['signin']);
        } else {
              this.msg='email exist';

          
        }
    });

  }
}
