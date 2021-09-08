import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
})
export class EnfantComponent implements OnInit {
  @Input() ordre: string | undefined;
  @Input() ville: string | undefined;
  note: number | undefined;
  disabled: boolean = false;

  @Output() newNote : EventEmitter<number> = new EventEmitter()


  sendNote(): void {
    if(this.note){
      this.disabled = true
      this.newNote.emit(this.note)
    }    
  }

  constructor() {}

  ngOnInit(): void {}
}
