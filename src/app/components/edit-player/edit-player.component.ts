import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player:any={};
  playerForm!:FormGroup;
  playerId:any;
  constructor(private activatedRoute:ActivatedRoute, private router: Router,private pService:PlayerService) { }

  ngOnInit(): void {
    this.playerId = this.activatedRoute.snapshot.params['id'];
  
  
    this.pService.getPlayerById(this.playerId).subscribe(
      (data) => {
        this.player = data.T;
      }
    );
  }
  editPlayer() {
    this.pService.editPlayer(this.player).subscribe((response) => {
      console.log("here response after update", response.msg);
    });
    this.router.navigate(['admin']);

  }

}
