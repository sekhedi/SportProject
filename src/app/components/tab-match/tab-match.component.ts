import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-tab-match',
  templateUrl: './tab-match.component.html',
  styleUrls: ['./tab-match.component.css']
})
export class TabMatchComponent implements OnInit {

  matchesTab: any = [];

  constructor(private router:Router,private mService:MatchService) { }

  ngOnInit(): void {
    this.mService.getAllMatches().subscribe((response)=>{
      this.matchesTab = response.T;
    });

  }

  display(id: any, msg: string) {
    alert('match number: ' + id + " " + msg);
  }
  deleteMatch(id: any) {
    //faire un appel aun service 
    this.mService.deleteMatchById(id).subscribe((response)=>{
      console.log('is deleted valid',response);
      this.mService.getAllMatches().subscribe((data)=>{
        this.matchesTab = data.T;
      });
    });
  }
  resultColor(s1: number, s2: number) {
    if (s1 > s2) {
      return ('green');
    } else if (s1 < s2) {
      return ('red');
    } else {
      return ('blue');
    }

  }
  resultatTeam(s1: number, s2: number, s3: string) {
    if (s1 > s2) {
      return (s3);
    } else if (s1 < s2) {
      return (s3);
    } else {
      return ('draws');
    }
  }
  afficheTeam(s1: number, s2: number) {
    if (s1 > s2) {
      return ('wins');
    } else if (s1 < s2) {
      return ('loses');
    } else {
      return ('');
    }
  }
  goToInfo(id:any){
    //this.router.navigate(['matcheInfo/'+ id]);
    this.router.navigate([`matcheInfo/${id}`]);
  }
  goToEdit(id:any){
    this.router.navigate([`editMatch/${id}`]);

  }
}