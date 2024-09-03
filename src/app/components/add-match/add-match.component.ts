import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //objet
  match: any = {};

  //Form Id
  matchForm!: FormGroup;

  constructor(private mService:MatchService,private router:Router) { }

  ngOnInit(): void {
  }
  addMatch() {
    console.log('add match btn clicked',this.match);
    this.mService.addMatch(this.match).subscribe((response)=>{
      this.router.navigate(['/admin']);
    }
  );

  }
 

}
