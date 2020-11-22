import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';


@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getdirlist().subscribe(response =>{
     this.employees = response;
   } );
  }

  
  }





