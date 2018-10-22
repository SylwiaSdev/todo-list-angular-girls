import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {


  @ViewChild ('inputElementRef') input;
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
    this.input.nativeElement.value = '';
  }

}
