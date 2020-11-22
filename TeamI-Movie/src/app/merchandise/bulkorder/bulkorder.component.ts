import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulkorder',
  templateUrl: './bulkorder.component.html',
  styleUrls: ['./bulkorder.component.css']
})
export class BulkorderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  success(){
    alert('Your order is submitted successfully Our team will get back to you in 48 Hours!! Thank You')
  }
  onSubmit(value:any):void{
    value=''
  }

}
