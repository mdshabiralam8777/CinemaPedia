import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-music-molly',
  templateUrl: './music-molly.component.html',
  styleUrls: ['./music-molly.component.css']
})
export class MusicMollyComponent implements OnInit {
  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getmusicmalayalam().subscribe(response =>{
     this.employees = response;
   } );
  }

}
