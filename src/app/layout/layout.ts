import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit, OnDestroy {

  constructor() {
    console.log("Layout created from constructor")
  }

  ngOnInit(): void {
    console.log("Layout created from ngOnInit");
  }

  ngOnDestroy(): void {
      console.log("Layout component has been destroyed");
  }
}
