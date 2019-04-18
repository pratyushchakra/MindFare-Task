import { Component, OnInit, ViewChild } from '@angular/core';
import { Level1Component } from "../app/components/level1/level1.component";
import json1 from '../../JSON/level1'
import json2 from '../../JSON/level2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Task';
  public json1: any = json1
  public json2: any = json2
  json1keys = Object.keys(json1);
  public spread: Boolean = false
  toShow = ''
  ngOnInit() {
  
  }

  myfunc(e) {
    if (this.toShow == e) 
    this.toShow = ''
  else
    this.toShow = e
  }
}
