import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsTab: any = [];
  constructor(private tservice: TeamService) { }

  ngOnInit(): void {
    this.tservice.getAllTeams().subscribe((response) => {
      console.log("here response", response.T);
      this.teamsTab = response.T;
    });

  }

}
