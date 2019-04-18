import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import json1 from '../../../../JSON/level1'
import json2 from '../../../../JSON/level2'

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.sass']
})
export class Level1Component implements OnInit {

  constructor() {
  }

  @Input()
  children: any;
  @Input()
  flag: Boolean;

  json1: any = json1
  spread: Boolean = false
  newFlag = false
  ngOnInit() {
  }
  spreadJson2(e) {
    if (e == 'Vegetables')
      this.newFlag = !this.newFlag
    console.log('this.newFlag: ', this.newFlag);
  }

}
