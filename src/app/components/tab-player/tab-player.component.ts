import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-tab-player',
  templateUrl: './tab-player.component.html',
  styleUrls: ['./tab-player.component.css']
})
export class TabPlayerComponent implements OnInit {
  playersTab: any=[];
  constructor(private router:Router,private pService:PlayerService) { }

  ngOnInit(): void { 
    this.pService.getAllPlayers().subscribe((response)=>{
      this.playersTab=response.T;
    });
  }
  deletePlayer(id: number) {
//faire un appel aun service 
    this.pService.deletePlayerById(id).subscribe((response)=>{
     console.log('is deleted valid',response);
          this.pService.getAllPlayers().subscribe((data)=>{
          this.playersTab = data.T;
        });
    });
  }
  goToInfo(id:number){
    //this.router.navigate(['matcheInfo/'+ id]);
    this.router.navigate([`playerInfo/${id}`]);
  }
  goToEdit(id:number){
    this.router.navigate([`editPlayer/${id}`]);

  }
}
