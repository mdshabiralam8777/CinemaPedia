import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-movies-bolly',
  templateUrl: './movies-bolly.component.html',
  styleUrls: ['./movies-bolly.component.css']
})
export class MoviesBollyComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getmoviebolly().subscribe(response =>{
     this.employees = response;
   } );
  }


  Search(){
    if(this.title=="")
    {
      this.ngOnInit();

    }else{
      this.employees = this.employees.filter(res =>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
  }
}
