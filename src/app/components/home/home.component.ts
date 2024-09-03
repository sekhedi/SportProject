import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  m:any={scoreOne:4,scoreTwo:3,teamOne:'juv',teamTwo:'real madrid'};
  
   


  constructor() { }

  ngOnInit(): void {
  }

}
