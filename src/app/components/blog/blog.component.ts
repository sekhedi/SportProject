import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  blogTab:any=[
    {title:'latestblog',description:'azesdfghjioklkj',date:'12/07/2024'},
    {title:'barcablog',description:'very nice equipe',date:'18/02/2024'},
    {title:'ronaldoblog',description:'equipe',date:'13/06/2023'},

  ];

}
