import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  standalone: false,
  templateUrl: './bar.html',
  styleUrl: './bar.scss'
})
export class Bar implements OnInit {

  constructor() {
    console.log("Bar created from constructor");
  }

  ngOnInit(): void {
    console.log("Bar created from ngOnInit");
  }
}
