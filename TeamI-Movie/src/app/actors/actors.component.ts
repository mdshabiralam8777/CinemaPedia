import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getdata().subscribe(response =>{
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
