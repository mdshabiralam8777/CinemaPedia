import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-dir-details-molly',
  templateUrl: './dir-details-molly.component.html',
  styleUrls: ['./dir-details-molly.component.css']
})
export class DirDetailsMollyComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getdirlistmolly(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }

}
