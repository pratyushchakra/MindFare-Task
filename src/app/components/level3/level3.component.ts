import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.sass']
})
export class Level3Component implements OnInit {

  @Input()
  flag2: any

  @Input()
  trans: any

  constructor() { }

  ngOnInit() {
    console.log('level3:',this.flag2, this.trans.rel);
  }

}
