import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  onclicks(): void {
    this.router.navigateByUrl('/section3');
  }
  ngOnInit(): void {
  }

}
