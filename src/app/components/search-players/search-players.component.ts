import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.css']
})
export class SearchPlayersComponent implements OnInit {
  searchForm!:FormGroup;
  playersTabResult:any=[];
  constructor(private formBuilder:FormBuilder) {
    this.searchForm=this.formBuilder.group({
     Age:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  searchPlayers(){
    let playersTab = JSON.parse(localStorage.getItem("players")||"[]");
    this.playersTabResult=playersTab.filter((elt:any)=> elt.age>=this.searchForm.value.Age)
    console.log("result",this.playersTabResult);
  }

}
