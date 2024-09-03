import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  team:any={};
  teamId:any;
  constructor(private activatedRoute: ActivatedRoute, private tService: TeamService) { }

  ngOnInit(): void {
    this.teamId = this.activatedRoute.snapshot.params['id'];
    
    this.tService.getTeamById(this.teamId).subscribe(
       (data)=>{
         this.team=data.T;
      }
    );
  }

}
