import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
  searchObj:any={};
  searchForm!: FormGroup;
  matchesTabResult:any=[];


  constructor(private activatedRoute: ActivatedRoute, private router:Router, private mService:MatchService) { }

  ngOnInit(): void {
    
   
  }
  searchMatches(){
    this.mService.searchMatch(this.searchObj).subscribe((response) => {
      console.log("here response after search",response);
      this.matchesTabResult=response.T;
    });

  }
}

