import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

 
  onclicks1(): void {
    this.router.navigateByUrl('/section3');
  }
  onclicks2(): void {
    this.router.navigateByUrl('/section3-t');
  }
  onclicks3(): void {
    this.router.navigateByUrl('/section3-m');
  }
  onclicks4(): void {
    this.router.navigateByUrl('/section3-b');
  }
  ngOnInit(): void {
  }
  

}
