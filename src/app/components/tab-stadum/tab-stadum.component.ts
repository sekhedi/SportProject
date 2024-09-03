import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-stadum',
  templateUrl: './tab-stadum.component.html',
  styleUrls: ['./tab-stadum.component.css']
})
export class TabStadumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  stadumsTab: any =[{id:1,name:'rades',country:'tunisia',capacity:65000},
                    {id:2,name:'campnow',country:'spain',capacity:80000},
                    {id:3,name:'bern',country:'spain',capacity:90000},
    ];

}
