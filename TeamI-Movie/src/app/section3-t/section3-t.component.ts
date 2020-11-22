import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section3-t',
  templateUrl: './section3-t.component.html',
  styleUrls: ['./section3-t.component.css']
})
export class Section3TComponent implements OnInit {
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onclick(): void {
    this.router.navigate(['/section2']);
  }

}
