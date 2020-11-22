import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-dir-details-tolly',
  templateUrl: './dir-details-tolly.component.html',
  styleUrls: ['./dir-details-tolly.component.css']
})
export class DirDetailsTollyComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getdirlisttolly(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }
}
