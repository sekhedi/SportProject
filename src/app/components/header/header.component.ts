import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any ={};
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    
 }
 isloggedIn(){
  let token=sessionStorage.getItem("token");
  if(token){
    this.user=jwtDecode(token);
  }
  return!!token;
 }
 logout(){
  sessionStorage.removeItem("token");
  this.router.navigate(['/']);
 }
}
