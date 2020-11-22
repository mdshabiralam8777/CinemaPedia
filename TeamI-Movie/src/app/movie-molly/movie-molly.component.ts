import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-movie-molly',
  templateUrl: './movie-molly.component.html',
  styleUrls: ['./movie-molly.component.css']
})
export class MovieMollyComponent implements OnInit {

  employees;
 
  title1: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getmoviemalayalam().subscribe(response =>{
     this.employees = response;
   } );
  }


  Search(){
    if(this.title1=="")
    {
      this.ngOnInit();

    }else{
      this.employees = this.employees.filter(res =>{
        return res.title1.toLocaleLowerCase().match(this.title1.toLocaleLowerCase());
      });
    }
  }
}
