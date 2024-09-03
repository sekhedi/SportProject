import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: any = {};
  tabTeams: any = [];
  playerForm!: FormGroup;

  constructor(private pService: PlayerService, private router: Router, private tService: TeamService) { }

  ngOnInit(): void {
    this.tService.getAllTeams().subscribe((response) => {
      console.log("here teamId", response);
      this.tabTeams = response.T;
    })
  }
  addPlayer() {
    console.log('add player btn clicked', this.player);
    this.pService.addPlayer(this.player).subscribe((response) => {
      this.router.navigate(['/admin']);
    }
    );

  }


}
