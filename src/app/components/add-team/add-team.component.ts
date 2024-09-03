import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team:any={};
  teamForm!: FormGroup;

  constructor(private tService:TeamService,private router:Router) { }

  ngOnInit(): void {
  }
  addTeam(){
    console.log('add player btn clicked',this.team);
    this.tService.addTeam(this.team).subscribe((response)=>{
      this.router.navigate(['/admin']);
    }
  );
  }


}
