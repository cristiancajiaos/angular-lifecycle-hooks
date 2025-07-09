import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: false,
  templateUrl: './foo.html',
  styleUrl: './foo.scss'
})
export class Foo implements OnInit {

  constructor() {
    console.log("Foo created from constructor");
  }

  ngOnInit(): void {
    console.log("Foo created from ngOnInit");
  }
}
