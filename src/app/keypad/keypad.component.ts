import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  input: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  concatenate(character: string): void {
    this.input = this.input.concat(character);
  }

}
