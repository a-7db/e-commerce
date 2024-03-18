import { Component, Input, OnInit } from '@angular/core';
import { height } from 'src/app/animations';
import { IDashboardNavs } from 'src/app/interfaces/IDashboard';

@Component({
  selector: 'app-NavDropDown',
  templateUrl: './NavDropDown.component.html',
  styleUrls: ['./NavDropDown.component.css'],
  animations: [height]
})
export class NavDropDownComponent implements OnInit {

  @Input() data!: IDashboardNavs;

  constructor() { }

  ngOnInit() {
  }

  isDisplayed: boolean = false;
  icon: string = 'm19.5 8.25-7.5 7.5-7.5-7.5';

  private changeIcon() {
    this.icon =
      this.icon === 'm19.5 8.25-7.5 7.5-7.5-7.5' ? 'm4.5 15.75 7.5-7.5 7.5 7.5'
        : 'm19.5 8.25-7.5 7.5-7.5-7.5'
  }

  dorpDown() {
    this.changeIcon();
    this.isDisplayed = !this.isDisplayed;
  }

}

