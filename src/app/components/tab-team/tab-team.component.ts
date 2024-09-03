import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-tab-team',
  templateUrl: './tab-team.component.html',
  styleUrls: ['./tab-team.component.css']
})
export class TabTeamComponent implements OnInit {
  teamsTab: any = [];
  constructor(private router: Router, private tService: TeamService) { }

  ngOnInit(): void {
    this.tService.getAllTeams().subscribe((response) => {
      this.teamsTab = response.T;
    });

  }

  deleteTeam(id: number) {
    //faire un appel aun service 
    this.tService.deleteTeamById(id).subscribe((response) => {
      console.log('is deleted valid', response);
      this.tService.getAllTeams().subscribe((data) => {
        this.teamsTab = data.T;
      });
    });
  }
  goToInfo(id: number) {
    this.router.navigate([`teamInfo/${id}`]);
  }
  goToEdit(id: number) {
    this.router.navigate([`editTeam/${id}`]);

  }
}
