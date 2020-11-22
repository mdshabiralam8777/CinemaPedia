import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-music-bolly',
  templateUrl: './music-bolly.component.html',
  styleUrls: ['./music-bolly.component.css']
})
export class MusicBollyComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getmusicbolly().subscribe(response =>{
     this.employees = response;
   } );
  }

}
