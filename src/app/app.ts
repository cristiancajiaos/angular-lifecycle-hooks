import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  protected title = 'angular-lifecycle-hooks';

  public isDestroyed: boolean = false;
  public countDown: number;
  public intervalId: any;

  constructor() {
    this.countDown = 10;
    this.intervalId = setInterval(() => {
      this.countDown--;
      if (this.countDown === 0){
        clearInterval(this.intervalId);
        this.isDestroyed = true;
      }
    }, 1000);

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  ngAfterViewInit(): void {
      console.log("Initialized both app view and component views");
  }
}
