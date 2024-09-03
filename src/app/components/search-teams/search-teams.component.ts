import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-teams',
  templateUrl: './search-teams.component.html',
  styleUrls: ['./search-teams.component.css']
})
export class SearchTeamsComponent implements OnInit {
  teamForm!:FormGroup;
  team:any={};
  teamsTabResult:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  searchTeam(){
    let teamsTab=JSON.parse(localStorage.getItem("teams") || "[]");
    this.teamsTabResult=teamsTab.filter((elt:any)=>
      elt.name==this.team.name && elt.owner==this.team.owner&&elt.foundation==this.team.foundation
    )
  }

}
