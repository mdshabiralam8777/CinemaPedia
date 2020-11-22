import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-dir-details-bolly',
  templateUrl: './dir-details-bolly.component.html',
  styleUrls: ['./dir-details-bolly.component.css']
})
export class DirDetailsBollyComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getdirlistbolly(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }

}
