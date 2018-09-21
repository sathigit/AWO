import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;
  constructor() { }

  ngOnInit() {
  }
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
