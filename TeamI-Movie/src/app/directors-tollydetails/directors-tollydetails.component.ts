import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-directors-tollydetails',
  templateUrl: './directors-tollydetails.component.html',
  styleUrls: ['./directors-tollydetails.component.css']
})
export class DirectorsTollydetailsComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getmusictelugulist(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }


}
