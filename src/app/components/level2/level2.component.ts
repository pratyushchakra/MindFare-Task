import { Component, OnInit, Input } from '@angular/core';
import json1 from '../../../../JSON/level1'
import json2 from '../../../../JSON/level2'
@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.sass']
})
export class Level2Component implements OnInit {

  @Input()
  relItems: any;
  @Input()
  flag: Boolean;

  constructor() { }
  json2: any = json2
  public innerFlag = ''
  ngOnInit() {
    console.log('level2', this.relItems, this.flag);
  }
  showInner(e) {
    console.log('showInner', e);
    if (this.innerFlag == e) 
      this.innerFlag = ''
    else
      this.innerFlag = e
  }
}
