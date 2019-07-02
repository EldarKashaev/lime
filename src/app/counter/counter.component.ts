import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  start: number;

  counterValue: number;
  speed: number;


  constructor() { }

  ngOnInit() {
     this.counter(this.start);
     this.speed = 1;
  }

  counter(value: number) {
    setInterval(() => {
      value = ++value;
      this.counterValue =  value;
    }, this.speed * 100);
  }

  update(newValue: number) {
    this.speed = newValue;
    this.counter(this.counterValue);
  }

}
