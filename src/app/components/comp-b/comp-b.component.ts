import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Post} from "./post";

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {
  @ViewChild('inputText') inputRef!: ElementRef;
  text!: string;
  title!: string;
  public posts: Post[] = [
    {id: 1, title: "title1", text: "lorem1"},
    {id: 2, title: "title2", text: "lorem2"},
    {id: 3, title: "title3", text: "lorem3"}
  ];

  constructor() {
    this.text = this.title = "";
  }

  ngOnInit(): void {
  }

  onFocus() {
    console.log("ViewChild = ", this.inputRef);
  }
}
