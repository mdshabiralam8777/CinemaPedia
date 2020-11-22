import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';
@Component({
  selector: 'app-dir-molly',
  templateUrl: './dir-molly.component.html',
  styleUrls: ['./dir-molly.component.css']
})
export class DirMollyComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getdirmolly().subscribe(response =>{
     this.employees = response;
   } );
  }

}
