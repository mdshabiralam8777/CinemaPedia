import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';


@Component({
  selector: 'app-directordetails',
  templateUrl: './directordetails.component.html',
  styleUrls: ['./directordetails.component.css']
})
export class DirectordetailsComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getlistdirectors(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }
  
}
