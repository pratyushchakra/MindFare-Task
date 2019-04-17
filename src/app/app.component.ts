import { Component, OnInit } from '@angular/core';
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
  // Mapjson1 = new Map(this.json1)
  // Mapjson2 = new Map(this.json2)

  showChildrenContent: Boolean = false
  ngOnInit() {
    console.log('JSON1: ', json1.children);
  }
  spreadChildren() {
    this.showChildrenContent = true
  }
}
